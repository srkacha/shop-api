import * as winston from 'winston';
import { enviroment } from '../config/enviroment';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' }
  });

// setting up the logger for production
// logging error and info logs to separate files
if ('production' === enviroment.nodeEnv){
    logger.add(new winston.transports.File({
        filename: enviroment.logger.logErrorPath,
        level: 'error',
    }));
    logger.add(new winston.transports.File({
        filename: enviroment.logger.logInfoPath,
        level: 'info',
    }))
}

// setting up the logger for development
if ('development' === enviroment.nodeEnv){
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

export default logger;