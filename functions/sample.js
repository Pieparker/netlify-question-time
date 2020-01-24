const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql'
  type Query {
    helloWorld: String
  }
'

const resolvers = {
  Query: {
    helloWorld: (root, args, context) => {
      return 'This is a demonstrative GraphQL API call.'
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

exports.handler = server.createHandler()
