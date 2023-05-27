import { LoggerMessageTypeEnum } from '@enum/LoggerMessageTypeEnum';

export class Logger {
  constructor() {}

  /**
   * Logs a message of the specified type to the console.
   * @param type The type of message to log.
   * @param message The message to log.
   */
  static log = (type: LoggerMessageTypeEnum, message: string) => {
    console.log(`[${type}] ${message}`);
  };
}
