import express from 'express';
import { appConfig } from '../config/App.config';
import { AuthService } from '../services/Auth.service';
import { DatabaseService } from '../services/Database.service';

export class App{
    private app: express.Application;
    // private databaseService: DatabaseService;
    // private authService: AuthService;
    private config;

    constructor() {
        this.app = express();
        // this.getPort();
        // this.databaseService = new DatabaseService();
        // this.authService = new AuthService();
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

    // getPort() {
    //     this.app.set('port', process.env.PORT || 3000);
    // }
    
    // start() {
    //     this.app.listen(this.app.get('port'), () => {
    //         console.log(`Server on http://localhost:${this.app.get('port')}`);
    //     })
    // }
}