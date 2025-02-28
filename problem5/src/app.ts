import express, { Application, NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import routes from './routes';
import { AppDataSource } from './database/postgresdb';

const app: Application = express();
app.use(express.json())

AppDataSource.initialize()
    .then(() => {
        console.log('Database connected successfully!');
    })
    .catch((error) => console.log('Database connection failed:', error));

app.use(routes);

export default app;
