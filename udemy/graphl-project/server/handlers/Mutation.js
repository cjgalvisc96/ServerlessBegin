const { UserType, PostType, HobbyType } = require("../types/Types");
const User = require("../models/User");
const Post = require("../models/Post");
const Hobby = require("../models/Hobby");
const graphql = require("graphql");
const _ = require("lodash");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID
} = graphql;

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        profession: { type: GraphQLString }
      },
      resolve(parent, args) {
        let user = new User({
          name: args.name,
          age: args.age,
          profession: args.profession
        });
        user.save();
        return user;
      }
    },
    createPost: {
      type: PostType,
      args: {
        comment: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let post = new Post({
          comment: args.comment,
          userId: args.userId
        });
        post.save();
        return post;
      }
    },
    createHobby: {
      type: HobbyType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        userId: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let hobby = new Hobby({
          title: args.title,
          description: args.description,
          userId: args.userId
        });
        hobby.save();
        return hobby;
      }
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        profession: { type: GraphQLString }
      },
      resolve(parent, args) {
        updatedser = User.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              age: args.age,
              profession: args.profession
            }
          },
          { new: true }
        );
        return updatedser;
      }
    },
    updatePost: {
      type: PostType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        comment: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        updatedPost = Post.findByIdAndUpdate(
          args.id,
          {
            $set: {
              comment: args.comment
            }
          },
          { new: true }
        );
        return updatedPost;
      }
    },
    updateHobby: {
      type: HobbyType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        updatedHobby = Hobby.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              description: args.description
            }
          },
          { new: true }
        );
        return updatedHobby;
      }
    },
    removeUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        let removedUser = User.findByIdAndRemove(args.id).exec();
        if (!removedUser) {
          return "Can´t remove user";
        } else {
          return removedUser;
        }
      }
    },
    removePost: {
      type: PostType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        let removedPost = Post.findByIdAndRemove(args.id).exec();
        if (!removedPost) {
          return "Can´t remove Post";
        } else {
          return removedPost;
        }
      }
    },
    removeHobby: {
      type: HobbyType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        let removedHobby = Hobby.findByIdAndRemove(args.id).exec();
        if (!removedHobby) {
          return "Can´t remove Hobby";
        } else {
          return removedHobby;
        }
      }
    }
  }
});

module.exports = Mutation;
