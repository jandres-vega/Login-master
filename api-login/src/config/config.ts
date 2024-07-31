import path from 'path';
import dotenv from 'dotenv';

const env:string = process.env.NODE_ENV || 'production';

const envPath = path.resolve(__dirname, '../../', `.env.${env}`);
dotenv.config({path: envPath});
dotenv.config();

const config= {
    port_server: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    jwt_secret: process.env.JWT_SECRET as string,
    email_host: process.env.EMAIL_HOST,
    bcrypt_salt: process.env.BCRYPT_SALT,
};

export {config};