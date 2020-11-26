import { gql } from 'apollo-server';

export default gql`
    scalar DateTime

    type Shop {
        """
        Shop unique ID.
        """
        id: ID!

        """
        Shop name.
        """
        name: String!
        
        """
        Entry time of creation.
        """
        createdAt: DateTime!

        """
        Entry time of deletion.
        """
        deletedAt: DateTime

        """
        Products available for the shop
        """
        products: [Product]
    }

    type Product {
        """
        Product unique ID.
        """
        id: ID!

        """
        Product name.
        """
        name: String!

        """
        Product price.
        """
        price: Float!

        """
        ID of the shop.
        """
        shopID: ID!

        """
        Entry time of creation.
        """
        createdAt: DateTime!

        """
        Entry time of deletion.
        """
        deletedAt: DateTime
    }

    type Query {
        shop(id: ID!): Shop
    }
`;