import { QBError, QBErrorResponse } from "./core"

export class EmailAlreadyExists extends QBError {
  constructor(email: string) {
    super({
      status: 409,
      errorCode: "EMAIL_ALREADY_EXISTS",
      message: `Email ${email} already exists.`
    })
  }
}

export class InvalidCredentials extends QBError {
  constructor() {
    super({
      status: 401,
      errorCode: "INVALID_CREDENTIALS",
      message: "Invalid credentials."
    })
  }
}