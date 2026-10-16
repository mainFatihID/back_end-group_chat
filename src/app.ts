// +--------------------------------------------------------------------------+
// |  TO DO THIS NIGHT                                                        |
// +------+---------------------------------------------------------+---------+
// |  No. | Tasks                                                   | Status  |
// +------+---------------------------------------------------------+---------+
// |  1.  | Use CORS Middleware (already installed).                | Done    |
// |  2.  | Install and use Status Code package from NPM.           |         |
// |  3.  | Create Controllers and Routes for the remaining tables. |         |
// |  4.  | Testing all table CRUD on ThunderClient.                |         |
// |  5.  | Add, commit, push, and sleep.                           |         |
// +------+---------------------------------------------------------+---------+

// Packages
import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';

// Files
import usersRoute from './routes/usersRoute.ts';
import groupsRoute from './routes/groupsRoute.ts';

const app: Express = express();
const port = 3000;

app.use(cors());

app.use("/api/users", usersRoute);

app.use('/api/groups', groupsRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Express listen at port ${port}. Open http://localhost:${port}`)
});