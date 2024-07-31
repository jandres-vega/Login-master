import {Express, Router} from "express";
import authRouter from "./auth.router";

const router = (app:Express) => {
    const router = Router();
    app.use('/api/v1', router);
    router.use('/auth', authRouter);
}

export {router};