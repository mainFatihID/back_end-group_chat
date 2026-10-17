import express, { Router } from 'express';
import { usersRegisterPostController, usersLoginPostController, usersGetController, usersPutController, usersDeleteController } from '../controllers/usersController.ts';
import { authMiddleware } from '../middlewares/authMiddleware.ts';

const usersRoute: Router = express.Router();

// Create | Post
// Register
usersRoute.post('/register', usersRegisterPostController);

// Login
usersRoute.post('/login', usersLoginPostController);

// Read | Get
usersRoute.get('/', authMiddleware, usersGetController);

// Update | Put
usersRoute.put('/:id', authMiddleware, usersPutController);

// Delete | Delete
usersRoute.delete('/:id', authMiddleware, usersDeleteController);

export default usersRoute;