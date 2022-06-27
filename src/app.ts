import express from 'express';
import mainRoute from './routes/main';
``
class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.routes()
  }
  public routes() {
    this.express.use(mainRoute);
  }
  
}

export default new App().express;