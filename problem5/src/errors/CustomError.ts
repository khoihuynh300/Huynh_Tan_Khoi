import ErrorCode from '../utils/errorCode';

interface CustomErrorParams {
    message?: string;
    errorCode?: string;
    errors?: Record<string, any>;
}

export default class CustomError extends Error {
    public status: number;
    public errorCode: string;
    public errors: Record<string, any>;

    constructor({
        message = ErrorCode.BAD_REQUEST.message,
        errorCode = ErrorCode.BAD_REQUEST.name,
        errors = {},
    }: CustomErrorParams = {}) {
        super(message);

        this.status = 400;
        this.errorCode = errorCode;
        this.errors = errors;
    }
}

export { CustomErrorParams };
