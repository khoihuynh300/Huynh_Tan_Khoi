import ErrorCode from '../utils/errorCode';
import CustomError, { CustomErrorParams } from './CustomError';

export default class NotFoundError extends CustomError {
    constructor({
        message = ErrorCode.NOT_FOUND.message,
        errorCode = ErrorCode.NOT_FOUND.name,
        errors = {},
    }: CustomErrorParams = {}) {
        super({message, errorCode, errors});
        this.status = 404;
    }
}