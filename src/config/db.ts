import { connect } from 'mongoose';
import { enviroment } from './enviroment';
import { sep } from 'path';

const URL = enviroment.mongoDb.url + sep + enviroment.mongoDb.dbName;  

const connectDatabase = async () => {
    try{
        await connect(URL, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB is connected!');
    }catch(error){
        // TODO - replace this with logger
        console.log(error);
    }
}

export default connectDatabase;