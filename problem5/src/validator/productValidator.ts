import Joi from 'joi';

// Schema validate query params
export const productFilterSchema = Joi.object({
    category: Joi.string().optional(),
    name: Joi.string().optional(),
    minPrice: Joi.number().min(0).optional(),
    maxPrice: Joi.number().min(0).optional(),
    page: Joi.number().integer().min(1).default(1),
    pageSize: Joi.number().integer().min(1).max(100).default(10),
});

// Validate create product
export const createProductSchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    price: Joi.number().min(0).required(),
    category: Joi.string().min(3).max(50).required(),
    description: Joi.string().optional(),
});

// Validate update product
export const updateProductSchema = Joi.object({
    id: Joi.number().integer().min(1).required(),
    name: Joi.string().min(3).max(255).optional(),
    price: Joi.number().min(0).optional(),
    category: Joi.string().min(3).max(50).optional(),
    description: Joi.string().optional(),
}).min(1);
