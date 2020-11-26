import { ApolloServer } from 'apollo-server';
import { enviroment } from './enviroment';
import resolvers from './resolvers';
import typeDefs from './typedefs';

// Creating the Apollo GraphQL server
const server = new ApolloServer({
    resolvers,
    typeDefs,
    introspection: enviroment.apollo.introspection,
    playground: enviroment.apollo.playground
});

// Starting the listening process
server.listen({ port: enviroment.port }).then(({url}) => {
    console.log(`Server is up and running at ${url}`);
});