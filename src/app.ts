import express, { Application, Response, Request } from 'express';
import router from './routes/routes';

const app: Application = express();

app.use(express.json());

app.use(router);

app.use('*', (req: Request, res: Response) => {
  res.status(404).json('404 not found');
});

export default app;
