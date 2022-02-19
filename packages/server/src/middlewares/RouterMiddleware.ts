import path from 'path';
import { Router } from 'express';
import { DatabaseService } from '../services/Database.service';
import { AuthenticationService } from '../services/Auth.service';


export class RouterMiddleware {
  private router: Router;
  private databaseService: DatabaseService;
  private authenticationService: AuthenticationService;

  constructor() {
    this.router = Router();
    this.databaseService = new DatabaseService();
    this.authenticationService = new AuthenticationService(this.databaseService);
    this.setRoutes();
  }

  private setRoutes() {
    this.router
      .route('/registration')
      .all((req, res) => {
        if (req.cookies.jwt) {
          res.redirect('/main');
        }
        res.sendFile(path.resolve(path.resolve(process.cwd(), '..', 'web', 'dist', 'registration.html')));
      })
      .post(async (req, res) => {
        await this.authenticationService.registration(req, res);
      })
      .put(async (req, res) => {
        await this.authenticationService.update(req, res);
      });

    this.router
      .route('/login')
      .get((req, res) => {
        if (req.cookies.jwt) {
          res.redirect('/main');
        }
        res.sendFile(path.resolve(path.resolve(process.cwd(), '..', 'web', 'dist', 'login.html')));
      })
      .post((req, res) => {

    });

    this.router
      .route('/main')
      .get((req, res) => {
        if (!req.cookies.jwt) {
          res.redirect('/login');
        }
        res.sendFile(path.resolve(path.resolve(process.cwd(), '..', 'web', 'dist', 'main.html')));
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
      });

    this.router.get('/', (req, res) => {
      if (req.cookies.jwt) {
        res.redirect('/main');
      } else {
        res.redirect('/login');
      }
    });
  }

  getRoutes() {
    return this.router;
  }
}