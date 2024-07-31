import express from 'express';
import cors from 'cors';
import {corsOptions} from "./config";


const app = express();
app.use(cors(corsOptions));

export {app};
