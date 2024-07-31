import type { Request, Response, NextFunction } from 'express';
import Boom from '@hapi/boom';
import {TypeErrors} from "../types";

const logErrors = (error: Error, _req: Request, _res: Response, next: NextFunction) => {
    console.error(error);
    next(error);
};

const boomErrorHandler = (error: TypeErrors, _req: Request, res: Response, next: NextFunction) => {
    if (Boom.isBoom(error)) {
        const { output } = error;
        res.status(output.statusCode).json(output.payload);
    }else {
        next(error);
    }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (error: TypeErrors, _req: Request, res: Response, _next: NextFunction) => {
    const typeError = {
        message: error.message,
        stack: error.stack
    };
    res.status(500).json(typeError);
};

export { logErrors, boomErrorHandler, errorHandler };