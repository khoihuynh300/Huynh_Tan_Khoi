import { NextFunction, Request, Response } from 'express';
import ErrorCode from '../utils/errorCode';

const errorHandlerMiddlewares = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({
        data: '',
        message: err.message || ErrorCode.SERVER_ERROR.message,
        errorCode: err.errorCode || ErrorCode.SERVER_ERROR.name,
        errors: err.errors || {}
    });
};
6;
export default errorHandlerMiddlewares;
