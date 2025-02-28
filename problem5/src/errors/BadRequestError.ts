import ErrorCode from '../utils/errorCode';
import CustomError, { CustomErrorParams } from './CustomError';

export default class BadRequestError extends CustomError {
    constructor({
        message = ErrorCode.BAD_REQUEST.message,
        errorCode = ErrorCode.BAD_REQUEST.name,
        errors = {},
    }: CustomErrorParams) {
        super({message, errorCode, errors});
        this.status = 400;
    }
}
