import * as dotenv from 'dotenv';

// Loading env variables
dotenv.config();

const defaultPort = 4000;
const defaultNodeEnv = 'development';
const defaultLogErrorPath = 'logs/error.log';
const defaultLogInfoPath = 'logs/info.log';

interface Enviroment {
    apollo: {
        introspection: boolean;
        playground: boolean;
    },
    mongoDb: {
        dbName: string;
        url: string;
    },
    logger: {
        logErrorPath: string;
        logInfoPath: string;
    },
    port: number | string;
    nodeEnv: string;
};

export const enviroment: Enviroment = {
    apollo: {
        introspection: process.env.APOLLO_INTROSPECTION === 'true',
        playground: process.env.APOLLO_PLAYGROUND === 'true'
    },
    mongoDb: {
        dbName: process.env.MONGODB_DB_NAME as string,
        url: process.env.MONGODB_URL as string
    },
    logger: {
        logErrorPath: process.env.LOG_ERROR_PATH || defaultLogErrorPath,
        logInfoPath: process.env.LOG_INFO_PATH || defaultLogInfoPath
    },
    port: process.env.PORT || defaultPort,
    nodeEnv: process.env.NODE_ENV || defaultNodeEnv
};