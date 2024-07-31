const allowOrigins = ['http://localhost:5173','*'];

const corsOptions = {
    origin: allowOrigins,
    method: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

export { corsOptions };