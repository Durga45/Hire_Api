import express, { Application } from "express";
import 'dotenv/config'
import { appRoutes } from "./globals/routes/appRoutes";

export default class Server {
  app: Application;
  constructor() {
    this.app = express();
  }

  public start(){
    this.middleware();
    this.setupRoutes();
    this.setupGlobalErrors();
    this.listenServer();
  }
  private middleware(){
    this.app.use(express.json())
  }
  private setupRoutes(){
     appRoutes(this.app)
  }
  private setupGlobalErrors(){

  }

  private listenServer() {
    const port = process.env.PORT || 5050;
    this.app.listen(port, () => {
      console.log(`Server is listening to the port ${port}`);
    });
  }
}
