import express, { type Express, type Request, type Response } from 'express';
import usersRoute from './routes/usersRoute.ts';

const app: Express = express();
const port = 3000;

app.use("/api/users", usersRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Express listen at port ${port}. Open http://localhost:${port}`)
});