import express from 'express';

export class App{
    express: express.Application;

    constructor() {
        this.express = express();
        this.getPort();
    }

    getPort() {
        this.express.set('port', process.env.PORT || 3000);
    }
    
    start() {
        this.express.listen(this.express.get('port'), () => {
            console.log(`Server on http://localhost:${this.express.get('port')}`);
        })
    }
}


// export class App {
//   public express;

//   constructor() {
//     this.express = express();
//     this.loadRoutes();
//   }

//   private loadRoutes(): void {
//     const router = express.Router();

//     router.get('/', (req, res) => {
//       res.json({ message: process.env.HELLO });
//     });

//     this.express.use('/', router);
//   }
// }
