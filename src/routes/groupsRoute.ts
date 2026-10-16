import express, { Router } from 'express';
import { groupsPostController, groupsGetController, groupsPutController, groupsDeleteController } from '../controllers/groupsController.ts';

const groupsRoute: Router = express.Router();

// Create | Post
groupsRoute.post('/', groupsPostController);

// Read | Get
groupsRoute.get('/', groupsGetController);

// Update | Put
groupsRoute.put('/:id', groupsPutController);

// Delete | Delete
groupsRoute.delete('/:id', groupsDeleteController);

export default groupsRoute;