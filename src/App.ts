import express, { Express } from 'express';

class App {
  readonly server: Express;

  constructor() {
    this.server = express();
  }
}

export default App;
