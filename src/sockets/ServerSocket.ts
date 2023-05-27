import { Server as SocketServer } from 'socket.io';
import { server } from '../server';

export class ServerSocket {
  private static socket: SocketServer;

  private constructor() {
    ServerSocket.generateSocket();
  }

  private static generateSocket():void {
    ServerSocket.socket = new SocketServer(server, {
      cors: {
        origin: "*"
      }
    });
  }

  static getSocketConnection() {
    if(ServerSocket.socket) return ServerSocket.socket;
    ServerSocket.generateSocket();
    return ServerSocket.socket;
  }
}
