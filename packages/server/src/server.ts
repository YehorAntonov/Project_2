import express from 'express';
import path from 'path';
import cp from 'cookie-parser';
import bp from 'body-parser';
import { App } from './views/App.view';
import { RouterMiddleware } from './middlewares/RouterMiddleware';

const server = new App();
const router = new RouterMiddleware();

server.setMiddleware(cp());
server.setMiddleware(bp.json());
server.setMiddleware(router.getRoutes());
server.setMiddleware(express.static(path.resolve(process.cwd(), '..', 'web', 'dist/')));
server.start();