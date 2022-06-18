import express from 'express';
import { routes } from './routes';
import {env} from './config/environment-variables';
import { AppDataSource } from './config/data-source';
import { resolve } from 'path';
import { errorHandler } from './middlewares/index';
import cors from 'cors';
import fs from 'fs';

const PORT = env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(routes);
app.use(
    cors({
      origin: '*',
      methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE'],
    }),
  );
app.use(errorHandler);
app.use('/files', express.static(resolve(__dirname, '..', 'uploads')))

const directory = resolve(__dirname, '..', 'dist', 'uploads')
fs.rmSync(directory, {force: true})
fs.mkdirSync(directory)


AppDataSource.initialize()
    .then(() => {
        app.listen(PORT, () => console.log(`Server in running in port ${PORT}`));
    })
    .catch((error) => console.log(error));