import { Response } from 'express';

export interface ICRUD{
    create(query: string, res: Response): void;
    read(query: string, res: Response): void;
    update(query: string, res: Response): void;
    delete(query: string, res: Response): void;
    clear(query: string, res: Response): void;
}