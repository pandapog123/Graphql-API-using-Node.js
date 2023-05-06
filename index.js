const { ApolloServer, gql } = require("apollo-server");
const { users } = require("./data");

const typeDefs = gql`
  type Query {
    users: [User]!
  }

  type User {
    id: String!
    name: String!
    birthday: String!
    email: String!
    todos: [Todo]!
  }

  type Todo {
    id: String!
    content: String!
    checked: Boolean!
  }
`;

const resolvers = {
  Query: {
    users: () => {
      return users;
    },
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const port = 3000;

server.listen(port).then(() => {
  console.log(`Go to http://localhost:${port}/graphql`);
});
