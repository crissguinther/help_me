import { config as dotenv } from 'dotenv';
import { server } from './server';
import { Logger } from '@lib/Logger';
import { LoggerMessageType } from '@enum/LoggerMessageTypeEnum';

dotenv();

const SERVER_PORT = process.env.SERVER_PORT;
server.listen(SERVER_PORT, () => {
  Logger.log(LoggerMessageType.info, `Server running on port ${SERVER_PORT}`);
});
