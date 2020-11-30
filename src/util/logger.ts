import { FileWatcherEventKind } from 'typescript';
import * as winston from 'winston';
import { enviroment } from '../config/enviroment';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with level `error` and below to `error.log`
      // - Write all logs with level `info` and below to `combined.log`
      //
    //   new winston.transports.File({ filename: 'error.log', level: 'error' }),
    //   new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

// setting up the logger for production
if ('production' === enviroment.nodeEnv){
    logger.add(new winston.transports.File({
        filename: 'error.log',
        level: 'error'
    }));
}

// setting up the logger for development
if ('development' === enviroment.nodeEnv){
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

export default logger;