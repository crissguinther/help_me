import { LoggerMessageType } from '@enum/LoggerMessageTypeEnum';

export class Logger {
  constructor() {}

  static log = (type: LoggerMessageType, message: string) => {
    console.log(`[${type}] ${message}`);
  };
}
