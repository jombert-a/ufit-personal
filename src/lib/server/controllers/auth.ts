import type { LoginFormProps, LoginFormResult } from "$lib/models/LoginForm";
import { createUser, findUser } from "$lib/server/services/user";
import { getServerUnauthorizedError, getServerError } from "$lib/server/serverError";
import { verifyPassword } from "$lib/server/services/auth";
import { createRefreshToken, deleteRefreshTokens, findRefreshTokens } from "$lib/server/services/token/refreshToken";
import type { RegistrationFormProps, RegistrationFormResult } from "$lib/models/RegistrationForm";
import { createAccessToken, getSecretKey, verifyAccessToken } from "../services/token/accessToken";
import type { PublicUser } from "$lib/models/User/public";
import { ConflictError, UnauthorizedError, UnprocessableEntityError } from "$lib/models/ServerError";

export async function registerUser(props: RegistrationFormProps): Promise<RegistrationFormResult> {
  const { agreement, login, name, password } = props;
  if (!agreement) {
    throw new UnprocessableEntityError("Agreement is not accepted");
  }

  const registeredUser = await findUser({ login });
  if (registeredUser) {
    throw new ConflictError("This login is already registered");
  }

  const newUser = await createUser({ login, name, password });

  return {
    success: !!newUser,
  };
}

export async function loginUser(props: LoginFormProps): Promise<LoginFormResult> {
  const user = await findUser({ login: props.login });

  if (!user || !(await verifyPassword(props.password, user.password))) {
    throw new UnauthorizedError('Invalid credentials');
  }


  const token = createAccessToken(user, getSecretKey());
  const tokenRefresh = (await createRefreshToken(user.id)).token;

  if (!token || !tokenRefresh) {
    throw getServerError();
  };

  return {
    token,
    tokenRefresh,
  };
}

export async function logoutUser(accessToken: string) {
  try {
    const user = verifyAccessToken<PublicUser>(accessToken, getSecretKey()); 
    if (!user || !user.id) {
      throw new UnauthorizedError('Invalid credentials');
    }

    await deleteRefreshTokens({ userId: user.id });

    return {
      success: true,
    }
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
}

export async function refreshUserTokens(userRefreshToken: string): Promise<LoginFormResult> {
  try {
    const refreshTokens = await findRefreshTokens({ token: userRefreshToken });
    const refreshToken = refreshTokens.find(el => el.token === userRefreshToken);

    if (!refreshToken) {
      throw getServerUnauthorizedError('Invalid credentials');
    }

    const user = await findUser({ id: refreshToken.userId });
    if (!user) {
      throw getServerError('Server error');
    }

    const token = createAccessToken(user, getSecretKey());
    const tokenRefresh = (await createRefreshToken(user.id)).token;

    await deleteRefreshTokens({ token: userRefreshToken });

    return {
      token,
      tokenRefresh,
    };
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
}