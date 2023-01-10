const { makeExecutableSchema, gql, ApolloServer } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({ schema });

// normal ApolloServer listen call but url will contain /graphql
server.listen({ port: 2000}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});