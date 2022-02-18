import express from 'express';
import { appConfig } from '../config/App.config';

export class App{
    private app: express.Application;
    private config;

    constructor() {
        this.app = express();
        this.config = appConfig;
    }

    setMiddleware(middleware: express.Handler) {
        this.app.use(middleware)
    }
    
    start() {
        this.app.listen(this.config.port, this.config.host, () => {
            console.log(`Server on  ${this.config.host}${this.config.port}, PID ${process.pid}`);
        })
    }
}