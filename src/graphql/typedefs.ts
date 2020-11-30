import { gql } from 'apollo-server';

export default gql`
    scalar DateTime

    type Shop {
        id: ID!
        name: String!
        createdAt: DateTime!
        deletedAt: DateTime
        products: [Product]
    }

    type Product {
        id: ID!
        name: String!
        price: Float!
        shopId: ID!
        createdAt: DateTime!
        deletedAt: DateTime
    }

    type Query {
        getShops: [Shop]
        getShop(id: ID!): Shop
        getProducts(shopId: ID!): [Product]
        getProductsByPage(shopId: ID!, page: Int!, pageSize: Int!): [Product]
        filterProductsByPrice(shopId: ID!, from: Float, to: Float): [Product]
    }

    type Mutation {
        createShop(name: String!): Shop
        deleteShop(id: ID!): Shop
        updateShop(name: String!, id: ID!): Shop
        createProduct(name: String!, price: Float!, shopId: ID!): Product
        deleteProduct(id: ID!): Product
        updateProduct(name: String, price: Float, id: ID!): Product
    }
`;