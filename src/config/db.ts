import { connect } from 'mongoose';
import { enviroment } from './enviroment';
import { sep } from 'path';
import logger from '../util/logger';

const URL = enviroment.mongoDb.url + sep + enviroment.mongoDb.dbName;  

const connectDatabase = async () => {
    try{
        await connect(URL, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });

        logger.log('info', 'Mongo database connection created successfully.');
    }catch(error){
        logger.log('error', 'Error connecting to Mongo database.');
    }
}

export default connectDatabase;