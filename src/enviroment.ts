import * as dotenv from 'dotenv';

// Loading env variables
dotenv.config();

const defaultPort = 4000;

interface Enviroment {
    apollo: {
        introspection: boolean;
        playground: boolean;
    },
    mongoDb: {
        dbName: string;
        url: string;
    },
    port: number | string;
};

export const enviroment: Enviroment = {
    apollo: {
        introspection: process.env.APOLLO_INTROSPECTION === 'true',
        playground: process.env.APOLLO_PLAYGROUND === 'true'
    },
    mongoDb: {
        dbName: process.env.MONGO_DB_NAME as string,
        url: process.env.MONGODB_URL as string
    },
    port: process.env.PORT || defaultPort
};