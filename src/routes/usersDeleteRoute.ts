import express, { type Express, type Request, type Response } from 'express';
import { userDelete } from '../controllers/userDeleteController.ts';

const app: Express = express();

app.delete('/api/users/:id', userDelete);