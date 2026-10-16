import express, { Router } from 'express';
import { usersPostController, usersGetController, usersPutController, usersDeleteController } from '../controllers/usersController.ts';

const usersRoute: Router = express.Router();

// Create | Post
usersRoute.post('/', usersPostController);

// Read | Get
usersRoute.get('/', usersGetController);

// Update | Put
usersRoute.put('/:id', usersPutController);

// Delete | Delete
usersRoute.delete('/:id', usersDeleteController);

export default usersRoute;