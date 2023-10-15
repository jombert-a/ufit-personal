import { error, fail } from "@sveltejs/kit";
import type { FailedActionUnprocessableBody } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BasicErrorData = Record<string, any>

abstract class ServerError<Data extends BasicErrorData = BasicErrorData> extends Error {
  constructor(
    message: string = "",
    public status: number = 400,
  ) {
    super(message);

    this.message = message;
  };

  public actionData: BasicErrorData = {
    message: this.message,
  }

  public updateActionData(data: Data) {
    this.actionData = { ...this.actionData, ...data }
    return this;
  }

  // use with return in routes/*/**/+page.server.ts
  public failWithAction() {
    return fail(this.status, this.actionData);
  };

  // use with throw in routes/*/**/+page.server.ts
  public failWithRedirect() {
    return error(this.status, { message: this.message });
  };
};

export class UnprocessableEntityError extends ServerError<FailedActionUnprocessableBody> {
  public status = 422
  constructor(
    public message: string,
  ) {
    super(message);
  };
};

export class UnauthorizedError extends ServerError {
  public status = 401
  constructor(
    public message: string,
  ) {
    super(message);
  };
}

export class ConflictError extends ServerError {
  public status = 409
  constructor(
    public message: string,
  ) {
    super(message);
  };
}
