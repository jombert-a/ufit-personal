import { test, describe, expect } from "vitest";
import { registerUser, loginUser, refreshUserTokens, logoutUser } from "$lib/server/controllers/auth";
import { fixtures } from "./__fixtures__";
import { createAccessToken, getSecretKey, verifyAccessToken } from "$lib/server/services/token/accessToken";
import { createRefreshToken, findRefreshTokens } from "$lib/server/services/token/refreshToken";
import { findUser } from "$lib/server/services/user";
import type { RegistrationFormProps } from "$lib/models/RegistrationForm";

describe('Authentication integration tests', () => {
  test('Successfull registration', async () => {
    const result = await registerUser(fixtures.registrationProps);
    expect(result.success).toBe(true);
  });

  test('An error on registration without agreement', async () => {
    const props: RegistrationFormProps = { ...fixtures.registrationProps, agreement: false };
    expect(registerUser(props)).rejects.toThrowError();
  });

  test('Successfull login', async () => {
    const result = await loginUser(fixtures.loginInProps);
    expect(typeof result.token).toBe('string');
    expect(typeof result.tokenRefresh).toBe('string');
  });
  
  test('An error on invalid credentials', async () => {
    const { login, password } = fixtures.user;
    const reversedPassword = password.split("").reverse().join("");
    const tryToLogin = loginUser.bind(null, { login, password: reversedPassword });
    expect(tryToLogin).rejects.toThrowError();
  });

  test('An error on expired token', () => {
    const secretKey = 'TEST_SECRET';
    const expiredToken = createAccessToken(fixtures.user, secretKey, { expiresIn: '1ms' });
    const verify = verifyAccessToken.bind(null, expiredToken, secretKey);
    expect(verify).toThrowError();
  });
  
  test('Refresh token successfully reproduce tokens', async () => {
    const user = await findUser({ login: fixtures.user.login });
    const refreshTokens = await findRefreshTokens({ userId: user?.id });
    const firstRefreshToken = refreshTokens[0];
    const result = await refreshUserTokens(firstRefreshToken.token);
    expect(typeof result.token).toBe('string');
    expect(typeof result.tokenRefresh).toBe('string');
  });

  test('Refresh token works only once', async () => {
    const user = await findUser({ login: fixtures.user.login });
    const refreshTokens = await findRefreshTokens({ userId: user?.id });
    const firstRefreshToken = refreshTokens[0];

    const tryToRefresh = refreshUserTokens.bind(null, firstRefreshToken.token)
    // 1
    const result = await tryToRefresh();
    expect(typeof result.token).toBe('string');
    expect(typeof result.tokenRefresh).toBe('string');

    // 2
    expect(tryToRefresh).rejects.toThrowError();
  });

  test('Multiple refresh tokens are valid', async () => {
    const user = await findUser({ login: fixtures.user.login });
    const userId = user?.id || 0;

    const firstToken = await createRefreshToken(userId);
    const secondToken = await createRefreshToken(userId);

    // 1
    const firstResult = await refreshUserTokens(firstToken.token);
    expect(typeof firstResult.token).toBe('string');
    expect(typeof firstResult.tokenRefresh).toBe('string');

    // 2
    const secondResult = await refreshUserTokens(secondToken.token);
    expect(typeof secondResult.token).toBe('string');
    expect(typeof secondResult.tokenRefresh).toBe('string');
  });


  test('Refresh tokens become invalid on logout', async () => {
    const user = await findUser({ login: fixtures.user.login });
    const userId = user?.id || 0;
    const accessToken = createAccessToken(user || undefined, getSecretKey());
    const refreshToken = await createRefreshToken(userId);
    const tryToRefresh = refreshUserTokens.bind(null, refreshToken.token);

    const result = await logoutUser(accessToken);
    expect(result.success).toBe(true);
    expect(tryToRefresh).rejects.toThrowError();
  });
});