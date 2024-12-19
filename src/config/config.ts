import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

// Load environment variables from .env file
dotenv.config({
    path: path.resolve(__dirname, `../.env`),
});

interface Config{
    PORT: string | undefined;
    SERVER : string | undefined;
    JWT_SECRET : string | undefined,
    DATABASE : string | undefined

}

const config : Config =  {
    PORT : process.env.PORT,
    SERVER : process.env.SERVER,
    DATABASE : process.env.DATABASE,
    JWT_SECRET : process.env.JWT_SECRET
}

export default config;