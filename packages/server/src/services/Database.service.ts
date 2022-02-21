import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { MySQLController } from '../controllers/MySQL.controller';
import { MongoDBController } from '../controllers/MongoDB.controller';
import { ValidationService } from './Validation.service';

export class DatabaseService {
  private mySql: MySQLController;

  private mongoDB: MongoDBController;

  private validator: ValidationService;

  constructor() {
    this.mySql = new MySQLController();
    this.mongoDB = new MongoDBController();
    this.validator = new ValidationService();
  }

  clear(req: Request, res: Response): void {
    // this.validator.refresh(req, res).validateDatabase().refresh();
    if (res.statusCode === 200) {
      let query: string;
      const { db } = req.body;
      switch (db) {
        case 'mySql':
          query = 'TRUNCATE TABLE person;';
          this.mySql.execute(query, res);
          break;
        case 'mongoDB':
          query = JSON.stringify({});
          this.mongoDB
            .clear(query)
            .then((result) => res.json(result))
            .catch((err) => err);
          break;
        default:
          res.status(409).end();
      }
    }
  }

  create(req: Request, res: Response): void {
    // this.validator.refresh(req, res).validate().refresh();
    if (res.statusCode === 200) {
      let query: string;
      const { db } = req.body;
      switch (db) {
        case 'mySql':
          query =
            'INSERT INTO person (FirstName, LastName, Age, PhoneNumber, Email, City, Company), ' +
            `VALUES('${req.body.firstName}', '${req.body.lastName}', '${req.body.age || 'NULL'}', `  +
            `'${req.body.phoneNumber || 'NULL'}', '${req.body.email || 'NULL'}', '${req.body.city || 'NULL'}', '${req.body.company || 'NULL'}');`;
          this.mySql.execute(query, res);
          break;
        case 'mongoDB':
          query = JSON.stringify({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            city: req.body.city,
            company: req.body.company,
          });
          this.mongoDB
            .create(query)
            .then((result) => res.json(result))
            .catch((err) => err);
          break;
        default:
          res.status(409).end();
      }
    }
  }

  delete(req: Request, res: Response): void {
    this.validator.refresh(req, res).validateId().validateDatabase().refresh();
    if (res.statusCode === 200) {
      let query: string;
      const { db } = req.body;
      switch (db) {
        case 'mySql':
          query = `DELETE FROM person WHERE Id = ${req.body.id};`;
          this.mySql.execute(query, res);
          break;
        case 'mongoDB':
          query = JSON.stringify({ _id: req.body.id });
          this.mongoDB
            .delete(query)
            .then((result) => res.json(result))
            .catch((err) => err);
          break;
        default:
          res.status(409).end();
      }
    }
  }

  read(req: Request, res: Response): void {
    this.validator.refresh(req, res).validateDatabase().refresh();
    if (res.statusCode !== 400) {
      let query: string;
      const { db } = req.body;
      switch (db) {
        case 'mySql':
          query = 'SELECT * FROM `person`';
          this.mySql.executeWithResponseData(query, res);
          break;
        case 'mongoDB':
          query = JSON.stringify({});
          this.mongoDB
            .read(query)
            .then((result) => res.json(result))
            .catch((err) => err);
          break;
        default:
          res.status(409).end();
      }
    }
  }
  update(req: Request, res: Response): void {
    this.validator.refresh(req, res).validateId().validate().refresh();
    if (res.statusCode === 200) {
      let query: string;
      const { db } = req.body;
      switch (db) {
        case 'mySql':
          query = `UPDATE person SET
                  FirstName = ${req.body.firstName},
                  LastName = ${req.body.lastName},
                  Age = ${req.body.age},
                  PhoneNumber = ${req.body.phoneNumber},
                  Email = ${req.body.email},
                  City = ${req.body.city},
                  Company = ${req.body.company},
                  WHERE Id = ${req.body.id};`;
          
          this.mySql.execute(query, res);
          break;
        case 'mongoDB':
          query = JSON.stringify([
            { _id: req.body.id },
            {
              $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                city: req.body.city,
                company: req.body.company,
              },
            },
          ]);
          this.mongoDB
            .update(query)
            .then((result) => res.json(result))
            .catch((err) => err);
          break;
        default:
          res.status(409).end();
      }
    }
  }

  async findUser(req: Request, res: Response) {
    // this.validator.refresh(req, res).validateLogin().refresh();
    if (res.statusCode === 200) {
      const query = JSON.stringify({ login: req.body.login });
      const user = await this.mongoDB.readUser(query);
      if (user) {
        return user;
      }
      return false;
    }
    res.status(400).end();
    return false;
  }

  async createUser(req: Request, res: Response) {
    // this.validator.refresh(req, res).validateLogin().validatePassword().refresh();
    if (res.statusCode === 200) {
      let query;
      return bcrypt.hash(req.body.password, 7).then((result) => {
        query = JSON.stringify({
          login: req.body.login,
          password: result,
        });
        return this.mongoDB
          .createUser(query)
          .then((newUser) => newUser)
          .catch((err) => err);
      });
    }
  }

  async updateUser(req: Request, res: Response) {
    this.validator.refresh(req, res).validateLogin().validatePassword().refresh();
    if (res.statusCode === 200) {
      const hashPassword = await bcrypt.hash(req.body.newPassword, 7, (hash) => hash);
      const query = JSON.stringify([
        { _id: req.body.id },
        {
          $set: {
            login: req.body.newLogin,
            password: hashPassword,
          },
        },
      ]);
      const newUser = await this.mongoDB.updateUser(query);
      if (newUser) {
        return newUser;
      }
      return false;
    }
    res.status(400).end();
    return false;
  }
}
