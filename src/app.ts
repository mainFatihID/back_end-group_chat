// +--------------------------------------------------------------------------+
// |  TO DO THIS NIGHT                                                        |
// +------+---------------------------------------------------------+---------+
// |  No. | Tasks                                                   | Status  |
// +------+---------------------------------------------------------+---------+
// |  1.  | Use CORS Middleware (already installed).                | Done    |
// |  2.  | Install and use Status Code package from NPM.           | Done    |
// |  3.  | Create Controllers and Routes for the remaining tables. | Done    |
// |  4.  | Testing all table CRUD on ThunderClient.                | Done    |
// |  5.  | Add, commit, push, and sleep.                           | Done    |
// +------+---------------------------------------------------------+---------+

// Packages
import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';

// Files
import usersRoute from './routes/usersRoute.ts';
import groupsRoute from './routes/groupsRoute.ts';
import groupMembersRoute from './routes/groupMembersRoute.ts';
import messagesRoute from './routes/messagesRoute.ts';

const app: Express = express();
const port = 3000;

app.use(express.json());

app.use(cors());

app.use("/api/users", usersRoute);

app.use('/api/groups', groupsRoute);

app.use('/api/group-members', groupMembersRoute);

app.use('/api/messages', messagesRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Express listen at port ${port}. Open http://localhost:${port}`)
});