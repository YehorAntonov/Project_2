import { MongoClient } from 'mongodb';
import { Request, Response } from 'express';
import { mongoDBConfig } from '../config/mongoDB.config';
import { ICRUD } from '../interface/ICRUD';

export class MongoDBController implements ICRUD{
    private connection;
    private person;
    private userTable;

    constructor() {
        this.connect();
    }

    connect() {
        const { password, name } = mongoDBConfig;
        const url = `mongodb+srv://Khramova:${password}@cluster0.zgkf2.mongodb.net/${name}?retryWrites=true&w=majority`
        MongoClient.connect(url)
            .then((db) => {
                this.connection = db;
                this.person =  this.connection.collection('person');
                this.userTable = this.connection.collection('userTable');
            })
            .catch((err) => {
                throw new Error(`Error during mongoDB connection: ${err.message}`)
            });
    }

    dropConnection() {
        this.connection.dropConnection();
    }

    clear(query: string, res: Response): void {
        const execute = JSON.parse(query);
        this.person
            .deleteMany(execute)
            .then(() => {
                res.status(200).end();
            })
            .catch((err) => {
                res.status(409).json(JSON.stringify(err));
            })
    }

    create(query: string, res: Response): void {
        const execute = JSON.parse(query);
        this.person
            .insertOne(execute)
            .then(() => {
                res.status(200).end();
            })
            .catch((err) => {
                res.status(409).json(JSON.stringify(err));
            })
    }

    delete(query: string, res: Response): void {
        const execute = JSON.parse(query);
        this.person
            .deleteOne(execute)
            .then(() => {
                res.status(200).end();
            })
            .catch((err) => {
                res.status(409).json(JSON.stringify(err));
            })
    }

    read(query: string, res: Response): void {
        const execute = JSON.parse(query);
        this.person
            .find(execute)
            .then((result) => {
                res.status(200).json(JSON.stringify(result));
            })
            .catch((err) => {
                res.status(409).json(JSON.stringify(err));
            })
    }

    update(query: string, res: Response): void {
        const execute = JSON.parse(query);
        this.person
            .updateOne(execute[0], execute[1])
            .then(() => {
                res.status(200).end();
            })
            .catch((err) => {
                res.status(409).json(JSON.stringify(err));
            })
    }
    
    readUser(query: string, res: Response){
        const excute = JSON.parse(query);
        return this.userTable.findOne(excute);
    }

    createUser(query: string, res: Response) {
        const excute = JSON.parse(query);
        return this.userTable.insertOne(excute);
    }
}
