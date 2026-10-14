import express, { type Express, type Request, type Response} from 'express';
import { userGet } from '../controllers/userGetController.ts';

const userGetRouter = express.Router();

userGetRouter.get('/api/users', userGet);

export default userGetRouter