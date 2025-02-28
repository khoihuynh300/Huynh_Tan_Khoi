import ErrorCode from '../utils/errorCode';
import CustomError, { CustomErrorParams } from './CustomError';

export default class InternalServerError extends CustomError {
    constructor({
        message = ErrorCode.SERVER_ERROR.message,
        errorCode = ErrorCode.SERVER_ERROR.name,
        errors = {},
    }: CustomErrorParams = {}) {
        super({ message, errorCode, errors });
        this.status = 500;
    }
}
