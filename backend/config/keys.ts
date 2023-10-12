import dotenv from 'dotenv';

dotenv.config();

export const KEYS = {
    PORT: process.env.PORT || 3000,
    DB_USER: process.env.POSTGRES_USER,
    DB_PASSWORD: process.env.POSTGRES_PASSWORD,
    DB_HOST: process.env.POSTGRES_HOST,
    DB_PORT: process.env.POSTGRES_PORT,
    DB_NAME: process.env.POSTGRES_DB
}