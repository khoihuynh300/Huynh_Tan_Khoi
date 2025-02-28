import express, { NextFunction, Request, Response, Router } from 'express';
import ProductRouter from './ProductRouter';
import NotFoundError from '../errors/NotFoundError';
import errorHandlerMiddlewares from '../middlewares/errorHandlerMiddleware';

const router = Router();
const productRouter = new ProductRouter();

router.use('/products', productRouter.router);

router.use((req: Request, res: Response, next: NextFunction) => {
    const error = new NotFoundError()
    next(error);
})

router.use(errorHandlerMiddlewares);

export default router;
