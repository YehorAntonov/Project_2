import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { authConfig } from '../config/auth.config';
import { DatabaseService } from './Database.service';

export class AuthenticationService {
  private databaseService: DatabaseService;

  constructor(database: DatabaseService) {
    this.databaseService = database;
  }

  async registration(req, res) {
    const candidate = await this.databaseService.findUser(req, res);
    if (candidate) {
      res.status(400).json({ message: 'Account already exists' });
    }
    const newUser = await this.databaseService.createUser(req, res);
    if (newUser) {
      const { insertedId, login } = newUser;
      AuthenticationService.generateJWTCookie(res, insertedId, login);
    }
  }

  async update(req, res) {
    const user = await this.databaseService.findUser(req, res);
    if (user) {
      const match = await bcrypt.match(req.password, user.password);
      if (match) {
        const newUser = await this.databaseService.updateUser(req, res);
        if (newUser) {
          const { _id, login } = newUser;
          AuthenticationService.generateJWTCookie(res, _id, login);
        }
        res.status(400).json({ message: 'Error during user data update' });
      }
      res.status(400).json({ message: 'Incorrect password' });
    }
    res.status(400).json({ message: 'User not found' });
  }

  async login(req, res) {
    const user = await this.databaseService.findUser(req, res);
    if (user) {
      const match = await bcrypt.compare(req.body.password, user.password);
      if (match) {
        const { _id, login } = user;
        AuthenticationService.generateJWTCookie(res, _id, login);
      } else {
        res.status(400).end();
      }
    }
  }

  logout(req, res) {
    res.clearCookie('jwt').redirect(302, '/login');
  }

  static generateJWTCookie(res, id, login) {
    const { secret } = authConfig;
    const token = jwt.sign({ id, login }, secret, { expiresIn: 24 * 60 * 60 * 1000 });
    const cookie = {
      expiresIn: 24 * 60 * 60 * 1000,
      httpOnly: true,
    };

    res.cookie('jwt', token, cookie);
    res.redirect('.');
    res.end();
  }
}
