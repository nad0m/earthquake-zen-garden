const { ApolloServer } = require('apollo-server')
const typeDefs = require('./src/gql/schema')
const resolvers = require('./src/gql/resolvers')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})