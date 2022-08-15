const { ApolloServer, gql } = require('apollo-server');

const profiles = [
    {
        id: 1,
        name: 'admin',
    },
    {
        id: 2,
        name: 'user',
    }
];

const users = [
    {
        id: 1,
        name: "brenno",
        email: "brenno@email.com",
        age: 25,
        wage: 10000.00,
        vip: true
    },
    {
        id: 2,
        name: "Arthur",
        email: "zico@email.com",
        age: 25,
        wage: 1000000000.00,
        vip: true
    }
];

const typeDefs = gql`
  scalar DateTime

  type Profile {
    id: ID!
    name: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int,
    wage: Float,
    vip: Boolean,
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    discount: Float
    priceWithDiscount: Float
  }

  type Query {
    hello: String!
    newDate: DateTime!
    userLoggued: User
    users: [User]
    user(id: ID): User
    product: Product
    certifications: [String]
    numbersMegaSena: [Int]
    profile: Profile
    profiles: [Profile]
    }
`

const resolvers = {

    Product: {
        priceWithDiscount: (product) => {
            if (product.discount) {
                return product.price - product.discount
            } else {
                return product.price
            }
        }
    },


    Query: {
        hello: () => "Hello World",
        newDate: () => new Date(),
        userLoggued: () => {
            return {
                id: 1,
                name: "brenno",
                email: "brenno@email.com",
                age: 25,
                wage: 10000.00,
                vip: true
            }
        },
        users: () => {
            return users
        },
        user: (_, args) => {
            return users.find(user => user.id == args.id)
        },
        product: () => {
            return {
                id: 1,
                name: "Product 1",
                price: 1000.00,
                discount: 50.00
            }
        },
        certifications: () => {
            return ["NodeJs", "GraphQL", "PHP"]
        },
        numbersMegaSena: () => {
            const order = (a, b) => a - b
            return Array(6).fill(0).map( (_, i) => i + 1 ).sort(order)
        },
        profile: (_, args) => {
            return profiles.find(profile => profile.id == args.id)
        },
        profiles: () => {
            return profiles
        },

    }
  }

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
})






