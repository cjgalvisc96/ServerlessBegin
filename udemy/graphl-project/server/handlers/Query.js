const { UserType, PostType, HobbyType } = require("../types/Types");
// Global modules
const graphql = require("graphql");
const _ = require("lodash");
const User = require("../models/User");
const Post = require("../models/Post");
const Hobby = require("../models/Hobby");
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const Query = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Description",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return User.findById(args.id);
      }
    },
    post: {
      type: PostType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Post.findById(args.id);
      }
    },
    hobby: {
      type: HobbyType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Hobby.findById(args.id);
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({});
      }
    },
    hobbies: {
      type: new GraphQLList(HobbyType),
      resolve(parent, args) {
        return Hobby.find({});
      }
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find({});
      }
    }
  }
});

module.exports = Query;
