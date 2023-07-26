import { HttpException, HttpStatus } from "@nestjs/common"

interface IErrorManager {
  type: keyof typeof HttpStatus,
  message: string;
}

export class ErrorManager extends Error {
  constructor(error: IErrorManager) {
    super(`${error.type}: ${error.message}`)
  }

  static createCustomError(message: string) {
    const name = message.split(": ")[0];
    if (name) {
      throw new HttpException(message, HttpStatus[name]);
    }else {
      throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}