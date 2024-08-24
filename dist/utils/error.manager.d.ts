import { HttpStatus } from "@nestjs/common";
interface IErrorManager {
    type: keyof typeof HttpStatus;
    message: string;
}
export declare class ErrorManager extends Error {
    constructor(error: IErrorManager);
    static createCustomError(message: string): void;
}
export {};
