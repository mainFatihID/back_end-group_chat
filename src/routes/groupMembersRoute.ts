import express, { Router } from 'express';
import { groupMembersPostController, groupMembersGetController, groupMembersPutController, groupMembersDeleteController } from '../controllers/groupMembersController.ts';

const groupMembersRoute: Router = express.Router();

// Create | Post
groupMembersRoute.post('/', groupMembersPostController);

// Read | Get
groupMembersRoute.get('/', groupMembersGetController);

// Update | Put
groupMembersRoute.put('/:id', groupMembersPutController);

// Delete | Delete
groupMembersRoute.delete('/:id', groupMembersDeleteController);

export default groupMembersRoute;