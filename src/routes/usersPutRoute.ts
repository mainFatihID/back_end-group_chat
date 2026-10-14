import express, { type Express, type Request, type Response } from 'express';
import { userPut } from '../controllers/userPutController.ts';

const app: Express = express();

app.put('/api/users/:id', userPut);