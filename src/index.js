import express from 'express';
import { routes } from './routes/index.js';
import { serve, setup }  from 'swagger-ui-express';

import { readFile } from 'fs/promises';
const swaggerFile = JSON.parse(await readFile(new URL('./documentation/swagger_output.json', import.meta.url)));

const app = express();

app.use('/doc', serve, setup(swaggerFile));

app.use(routes);

app.listen(3000, () => {
    console.log('O servidor foi iniciado!')
})