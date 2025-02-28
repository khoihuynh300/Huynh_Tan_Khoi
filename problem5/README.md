# Problem 5: A Crude Server

## Overview
This API provides CRUD operations for managing products, including filtering with pagination and validation using Joi.

## Getting Started

### 1. Install Dependencies
```
npm install
```

### 2. Set up environment
Create .env file

Example:
```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=db_product
```

### 3. Start the server
```
npm run dev
```

## API Endpoints
 
### 1. Create Product
Create a product with name, price, category and description 

Endpoint: `POST /products`

Request Body: 
```json
{
    "name":"Laptop Dell",
    "price":32000000,
    "description":"Laptop Dell XPS 15 CPU Intel Core i7, RAM 16GB, SSD 512GB",
    "category":"Laptop"
}
```
Response:
```json
{
  "id": 1,
  "name": "Laptop Dell",
  "price": 32000000,
  "description": "Laptop Dell XPS 15 CPU Intel Core i7, RAM 16GB, SSD 512GB",
  "category": "Laptop",
  "createdAt": "2025-02-27T14:35:15.213Z",
  "updatedAt": "2025-02-27T14:35:15.213Z"
}
```

Example:
```http
POST http://localhost:3000/products
Content-Type: application/json

{
    "name":"Laptop Dell",
    "price":32000000,
    "description":"Laptop Dell XPS 15 CPU Intel Core i7, RAM 16GB, SSD 512GB",
    "category":"Laptop"
}
```


### 2. Get Products
Endpoint: `GET /products`

| Parameter  | Type   | Description |
|------------|--------|-------------|
| `category` | String | Filter by category |
| `name`     | String | Filter by name |
| `minPrice` | Number | Minimum price |
| `maxPrice` | Number | Maximum price |
| `page`     | Number | Page number (default: 1) |
| `pageSize` | Number | Items per page (default: 10) |

Response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "Laptop Dell",
      "price": "32000000",
      "category": "Laptop",
      "description": "Laptop Dell XPS 15 CPU Intel Core i7, RAM 16GB, SSD 512GB",
      "createdAt": "2025-02-27T14:35:15.213Z",
      "updatedAt": "2025-02-27T14:35:15.213Z"
    }
  ],
  "page": 1,
  "totalPages": 1
}
```

Example:
```http
GET http://localhost:3000/products?page=1&pageSize=10&name=Laptop
```

### 3. Get Product By Id
Endpoint: `GET /products/:id`

Path Params:
  - id: id of product 

Response:

```json
{
  "id": 1,
  "name": "Laptop Dell",
  "price": "32000000",
  "category": "Laptop",
  "description": "Laptop Dell XPS 15 CPU Intel Core i7, RAM 16GB, SSD 512GB",
  "createdAt": "2025-02-27T11:45:43.929Z",
  "updatedAt": "2025-02-27T11:45:43.929Z"
}
```

Example:
```http
GET http://localhost:3000/products/1
```

### 4. Update Product
Endpoint: `PUT /products/:id`

Path Params:
  - id: id of product 

Request Body: 
```json
{
  "name": "Laptop Dell XPS 15",
  "price": "24000000",
  "category": "Laptop",
  "description": "Laptop Dell XPS 15 CPU Intel Core i7, RAM 16GB, SSD 512GB",
}
```

Response:

```json
{
  "id": 1,
  "name": "Laptop Dell XPS 15",
  "price": "24000000",
  "category": "Laptop",
  "description": "Laptop Dell XPS 15 CPU Intel Core i7, RAM 16GB, SSD 512GB",
  "createdAt": "2025-02-27T11:45:43.929Z",
  "updatedAt": "2025-02-27T11:45:43.929Z"
}
```

Example:
```http
PUT http://localhost:3000/products/1
Content-Type: application/json

{
  "name": "Laptop Dell XPS 15",
  "price": "24000000",
}

```

### 5. Delete Product 
Endpoint: `DELETE /products/:id`

Path Params:
  - id: id of product 

Response: 204 No Content

Example:
```http
DELETE  http://localhost:3000/products/1
```
