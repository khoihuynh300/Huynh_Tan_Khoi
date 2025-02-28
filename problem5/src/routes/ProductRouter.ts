import { Router } from 'express';
import { ProductController } from '../controllers';

class ProductRouter {
    public router = Router();
    public productController = new ProductController();

    constructor() {
        this.router.get('/', this.productController.getProducts);
        this.router.get('/:id', this.productController.getProductById);
        this.router.post('/', this.productController.createProduct);
        this.router.put('/:id', this.productController.updateProduct);
        this.router.delete('/:id', this.productController.deleteProduct);
    }
}

export default ProductRouter;
