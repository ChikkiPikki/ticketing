export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message); // more or less equivalent to calling new Error();
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract serializeErrors(): { message: string; field?: string }[];
}
