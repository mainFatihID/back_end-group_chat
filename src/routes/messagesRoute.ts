import express, { Router } from 'express';
import { messagesPostController, messagesGetController, messagesPutController, messagesDeleteController } from '../controllers/messagesController.ts';

const messagesRoute: Router = express.Router();

// Create | Post
messagesRoute.post('/', messagesPostController);

// Read | Get
messagesRoute.get('/', messagesGetController);

// Update | Put
messagesRoute.put('/:id', messagesPutController);

// Delete | Delete
messagesRoute.delete('/:id', messagesDeleteController);

export default messagesRoute;