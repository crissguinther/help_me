import App from './App';
import { createServer } from 'http';

const app = new App();

export const server = createServer(app.server);
