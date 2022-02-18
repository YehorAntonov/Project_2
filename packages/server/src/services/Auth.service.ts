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
    try {
      const candidate = await this.databaseService.findUser(req, res);
      if (candidate) {
        return res.status(400).json({message: 'Account already exist'})
      }
      const newUser = await this.databaseService.createUser(req, res);
      if (newUser) {
        const { _id, login } = newUser;
        AuthenticationService.generateJWTCookie(res, _id, login);
      }
      res.status(400).json({ message: 'Error during user creation' });
    } catch (e) {
      res.status(400).json({message: 'Uncaught error during user creation'})
    }
  }

  async update(req, res) {
    try {
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
        res.status(400).json({ message: 'Incirrect password' });
      }
      res.status(400).json({ message: 'User not found' });
    } catch (e) {
      res.status(400).json({ message: 'Login error' });
    }
  }
  
  async login(req, res) {
    try {
      const user = await this.databaseService.findUser(req, res);
      if (user) {
        const match = await bcrypt.match(req.password, user.password);
        if (match) {
          const { _id, login } = user;
          AuthenticationService.generateJWTCookie(res, _id, login);
        }
        res.status(400).json({ message: 'Incorrect password' });
      }
      res.status(400).json({ message: 'User not found' });
    } catch (e) {
      res.status(400).json({ message: 'Login error' });
    }
  }

  static generateJWTCookie(res, id, login) {
    const { secret } = authConfig;
    const token = jwt.sign({ id, login }, secret, { expresIn: 24 * 60 * 60 * 1000 });
    const cookie = {
      expresIn: 24 * 60 * 60 * 1000,
      httpOnly: true
    };
    res.cookie('jwt', token, cookie)
  }
}