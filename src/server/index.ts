import express, { Express, Request, Response } from "express";

// Environment variables
import dotenv from 'dotenv';

// Security variables
import cors from 'cors';
import helmet from 'helmet';

//HTTPS TODO

// Root Router
import rootRouter from '../routes';

// Configuration the .env file
dotenv.config();

// Create Express APP
const server: Express = express();

// Define SERVER to /api and use root router from index.ts in routes
// From this point onover https://localhost:8000/api/...

server.use(
    '/api',
    rootRouter
    );

// Static server
server.use(express.static('public'));

// Mongoose coneection TODO

// Security config
server.use(helmet());
server.use(cors());

// Content type
server.use(express.urlencoded({ extended: true, limit: '50mb'}));
server.use(express.json({limit: '50mb'}));

// Redirection config -> localhost:8000/ to localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
});

export default server;