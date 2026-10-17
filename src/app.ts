// +----------------------------------------------------------------------------------------------------------+
// |  TO DO THIS NIGHT                                                                                        |
// +------+-----------------------------------------------------------------------------------------+---------+
// |  No. | Tasks                                                                                   | Status  |
// +------+-----------------------------------------------------------------------------------------+---------+
// |  1.  | Install dan pasang JWT.                                                                 |         |
// |  2.  | Tes token login.                                                                        |         |
// |  3.  | Install dan pasang Cloudinary.                                                          |         |
// |  4.  | Tambah kolom ```profile_picture``` di Database                                          |         |
// |  5.  | Tambah Controller dan Route untuk Register dan Edit user yang belum punya foto profil.  |         |
// |  6.  | Tes fungsi CRUD foto profil.                                                            |         |
// |  7.  | Evaluasi (add ., commit, push).                                                         |         |
// +------+-----------------------------------------------------------------------------------------+---------+

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