import express, { Router } from 'express';
import { usersDeleteRoute, usersGetRoute, usersPostController, usersPutRoute } from '../controllers/usersController.ts';

const usersRoute: Router = express.Router();

// Create | Post
usersRoute.post('/', usersPostController);

// Read | Get
usersRoute.get('/', usersGetRoute);

// Update | Put
usersRoute.put('/:id', usersPutRoute);

// Delete | Delete
usersRoute.delete('/:id', usersDeleteRoute);

export default usersRoute;