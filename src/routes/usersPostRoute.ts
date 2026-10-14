import express, { type Express, type Request, type Response } from 'express';
import { userPost, usersPostController } from '../controllers/usersController.ts';

const app: Express = express();

app.post('/api/users', usersPostController);