import { config as dotenv } from 'dotenv';
import { server } from './server';
import { Logger } from '@lib/Logger';
import { LoggerMessageTypeEnum } from '@enum/LoggerMessageTypeEnum';
import { setSockets } from '@sockets/index';

dotenv();
setSockets();

const SERVER_PORT = process.env.SERVER_PORT;
server.listen(SERVER_PORT, () => {
  Logger.log(
    LoggerMessageTypeEnum.info,
    `Server running on port ${SERVER_PORT}`
  );
});
