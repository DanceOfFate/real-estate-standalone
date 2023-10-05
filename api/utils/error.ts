import {Error} from "../types";

export const errorHandler = (statusCode: number, message: string) => {
    const error: Error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}