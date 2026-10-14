import express, { type Express, type Request, type Response } from 'express';
import pool from './db/index.ts';
import userGetRouter from './routes/usersGetRoute.ts';

const app: Express = express();
const port = 3000;

app.use("/api/user", userGetRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Express listen at port ${port}. Open http://localhost:${port}`)
});