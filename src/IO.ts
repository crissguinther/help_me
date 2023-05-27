import { Server as SocketServer } from 'socket.io';
import { server } from './server';

export const IO = new SocketServer(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  },
});
