import { Router } from "express";
// import { AuthService } from '../services/Auth.service';
import { DatabaseService } from '../services/Database.service';

export class RouterMiddlewate{
    private router: Router;
    private databaseService: DatabaseService;
    // private authService: AuthService;
    constructor() {
        this.router = Router();
        this.databaseService = new DatabaseService();
        // this.authService = new AuthService();
    }

    private setRoutes() {
        this.router
            .route('/registration')
            .get((req, res) => {
                console.log(`req get ${req}, ${res}`)
            })
            .post((req, res) => {
                console.log(`req get ${req}, ${res}`)
            })
            .put((req, res) => {
                console.log(`req get ${req}, ${res}`)
            })
        
        this.router
            .route('/auth')
            .post((req, res) => {
                console.log(`req get ${req}, ${res}`)
            })
        
        this.router
            .route('/main')
            .get((req, res) => {
                this.databaseService.read(req, res);
            })
            .post((req, res) => {
                this.databaseService.create(req, res);
            })
            .put((req, res) => {
                this.databaseService.update(req, res);
            })
            .delete((req, res) => {
                if (req.body.truncate) {
                    this.databaseService.clear(req, res);
                }
                this.databaseService.delete(req, res);
            })
        
        this.router.get('/', (req, res) => {
            res.redirect('/login');
        })
    }

    getRoutes() {
        return this.router;
    }
}