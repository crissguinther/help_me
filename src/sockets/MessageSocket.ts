import { ServerSocket } from '@sockets/ServerSocket';

// Logger information
import { Logger } from '@lib/Logger';
import { LoggerMessageTypeEnum } from '@enum/LoggerMessageTypeEnum';

export class MessageSocket {
  private connection: ReturnType<typeof ServerSocket.getSocketConnection> = ServerSocket.getSocketConnection();

  constructor() {
    this.connection.on('connection', (socket) => {
      Logger.log(LoggerMessageTypeEnum.info, 'Someone has connected');
    });  
  }
}
