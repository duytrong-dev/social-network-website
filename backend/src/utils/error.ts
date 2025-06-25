export class CustomError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class ValidateError extends CustomError {
  errors: Record<string, string[]>;
  constructor(message: string, statusCode: number, errors: Record<string, string[]>) {
    super(message, statusCode);
    this.errors = errors;
  }
}