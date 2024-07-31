import express from 'express';
import cors from 'cors';
import session from 'express-session';
import morgan from 'morgan';
import {corsOptions} from "./config";
import {router} from "./routes";
import {boomErrorHandler, errorHandler, logErrors} from "./middlewares";
import './utils/auth';

const app = express();
app.use(cors(corsOptions));

app.use(morgan('dev'));
app.use(express.json());

app.use(session({
    secret: 'jIPMlRXL4srZST68WFCi0v5xpnA3OYuQ',
    resave: false,
    saveUninitialized: false
}));

router(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

export {app};
