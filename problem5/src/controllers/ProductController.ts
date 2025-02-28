import { NextFunction, Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
    private productService = new ProductService();

    public getProducts = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const products = await this.productService.getAll(req.query);
            res.status(200).json(products);
        } catch (err) {
            next(err);
        }
    };

    public getProductById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const productId = Number(req.params.id);
            const product = await this.productService.getById(productId);

            res.status(200).json(product);
        } catch (err) {
            next(err);
        }
    };

    public createProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const product = await this.productService.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            next(err);
        }
    };

    public updateProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id);

            const product = await this.productService.update({ ...req.body, id });
            res.status(200).json(product);
        } catch (err) {
            next(err);
        }
    };

    public deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id);

            await this.productService.delete(id);
            res.status(204).send(); 
        } catch (err) {
            next(err);
        }
    };
}

export default ProductController;
