import { IO } from '@base/IO';

// Logger information
import { Logger } from '@lib/Logger';
import { LoggerMessageTypeEnum } from '@enum/LoggerMessageTypeEnum';

IO.on('connection', (socket) => {
  Logger.log(LoggerMessageTypeEnum.info, 'Someone has connected');
});
