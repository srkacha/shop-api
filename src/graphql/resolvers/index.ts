import shopResolvers from './shop-resolvers';
import productResolvers from './product-resolvers';

export default {
    Query: {
        ...shopResolvers.Query,
        ...productResolvers.Query
    },
    Mutation: {
        ...shopResolvers.Mutation,
        ...productResolvers.Mutation
    }
};