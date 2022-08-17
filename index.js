const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');

const schemaPath = 'schema/Index.graphql'

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers: resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
})






