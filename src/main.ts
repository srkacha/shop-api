import { ApolloServer } from 'apollo-server';
import { enviroment } from './config/enviroment';
import connectDatabase from './config/db';
import { resolvers }  from './graphql/resolvers';
import typeDefs from './graphql/typedefs';
import {
    DateTimeMock
} from 'graphql-scalars';

// Creating an async fucntion to ensure the db is 
// connected before we start the server
const startApp = async () => {
    // Connecting to mongodb database
    await connectDatabase();

    // Creating the Apollo GraphQL server
    const server = new ApolloServer({
        resolvers,
        typeDefs,
        mocks: {
            DateTime: DateTimeMock
        },
        mockEntireSchema: false,
        introspection: enviroment.apollo.introspection,
        playground: enviroment.apollo.playground
    });

    // Starting the listening process
    server.listen({ port: enviroment.port }).then(({url}) => {
        console.log(`Server is up and running at ${url}`);
    });
}

// Starting the application
startApp();

