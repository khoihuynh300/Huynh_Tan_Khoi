import { Request } from 'express';
import { AppDataSource } from '../database/postgresdb';
import BadRequestError from '../errors/BadRequestError';
import NotFoundError from '../errors/NotFoundError';
import { Product } from '../models/Product';
import {
    createProductSchema,
    productFilterSchema,
    updateProductSchema,
} from '../validator/productValidator';

class ProductService {
    private productRepository = AppDataSource.getRepository(Product);

    public getAll = async (filters: any) => {
        const { error, value } = productFilterSchema.validate(filters, { abortEarly: false });
        if (error) {
            const errors = error.details.reduce((acc, err) => {
                const field = err.path.join('.');
                acc[field] = err.message;
                return acc;
            }, {} as Record<string, string>);
            throw new BadRequestError({ errors });
        }

        const { category, name, minPrice, maxPrice, page, pageSize } = value;

        const query = this.productRepository.createQueryBuilder('product');

        if (category) {
            query.andWhere('product.category = :category', { category });
        }
        if (name) {
            query.andWhere('product.name LIKE :name', { name: `%${name}%` });
        }
        if (minPrice) {
            query.andWhere('product.price >= :minPrice', { minPrice });
        }
        if (maxPrice) {
            query.andWhere('product.price <= :maxPrice', { maxPrice });
        }

        query.skip((page - 1) * pageSize).take(pageSize);

        const [products, total] = await query.getManyAndCount();

        return {
            data: products,
            page,
            totalPages: Math.ceil(total / pageSize),
        };
    };

    public getById = async (productId: number): Promise<Product> => {
        const product = await this.productRepository.findOneBy({ id: productId });
        if (!product) {
            throw new NotFoundError({ message: 'Product not found' });
        }

        return product;
    };

    public create = async (data: typeof createProductSchema): Promise<Product> => {
        const { error, value } = createProductSchema.validate(data, { abortEarly: false });

        if (error) {
            const errors = error.details.reduce((acc, err) => {
                const field = err.path.join('.');
                acc[field] = err.message;
                return acc;
            }, {} as Record<string, string>);

            throw new BadRequestError({ errors });
        }

        return await this.productRepository.save(value);
    };

    public update = async (data: typeof updateProductSchema): Promise<Product> => {
        const { error, value } = updateProductSchema.validate(data, { abortEarly: false });

        if (error) {
            const errors = error.details.reduce((acc, err) => {
                const field = err.path.join('.');
                acc[field] = err.message;
                return acc;
            }, {} as Record<string, string>);

            throw new BadRequestError({ errors });
        }

        const product = await this.productRepository.findOneBy({ id: value.id });
        if (!product) {
            throw new NotFoundError({ message: 'Product not found' });
        }

        Object.assign(product, value);

        return await this.productRepository.save(product);
    };

    public delete = async (id: number): Promise<void> => {
        if (!id || id <= 0) {
            throw new BadRequestError({ message: 'Invalid product ID' });
        }

        const product = await this.productRepository.findOne({ where: { id } });

        if (!product) {
            throw new NotFoundError({ message: 'Product not found' });
        }

        await this.productRepository.remove(product);
    };
}

export default ProductService;
