import { ApolloServer } from 'apollo-server';
import { enviroment } from './config/enviroment';
import connectDatabase from './config/db';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typedefs';
import logger from './util/logger';

// Creating an async fucntion to ensure the db is 
// connected before we start the server 
const startApp = async () => {
    // Connecting to mongodb database
    await connectDatabase();

    // Creating the Apollo GraphQL server
    const server = new ApolloServer({
        resolvers,
        typeDefs,
        introspection: enviroment.apollo.introspection,
        playground: enviroment.apollo.playground
    });

    // Starting the listening process
    server.listen({ port: enviroment.port }).then(({url}) => {
        logger.log('info', `Server is up and running at ${url}`);
    }).catch(err => {
        logger.log('error', `Error starting the Apollo server`);
    });
}

// Starting the application
startApp();

