const Query = require("../handlers/Query");
const Mutation = require("../handlers/Mutation");
const { GraphQLSchema } = require("graphql");
// Export
module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
