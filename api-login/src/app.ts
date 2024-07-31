import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import {corsOptions} from "./config";
import {router} from "./routes";
import {boomErrorHandler, errorHandler, logErrors} from "./middlewares";

const app = express();
app.use(cors(corsOptions));

app.use(morgan('dev'));
app.use(express.json());

router(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

export {app};
