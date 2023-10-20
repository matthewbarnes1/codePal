const { User } = require("../models");
// const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    // get a single user by either their id or their username
    getSingleUser: async (parent, { _id }) => {
      return User.findById(_id);
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("books");
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      console.log(user);
      return { token, user };
    },
    // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
    login: async (parent, { username, email, password }) => {
      const user = await User.findOne({
        $or: [{ username: username }, { email: email }],
      });
      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw AuthenticationError;
      }
      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw AuthenticationError;
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
    // user comes from `req.user` created in the auth middleware function
    //   saveBook: async (parent, { userId, book }) => {
    //     console.log("here now");
    //     const updatedUser = await User.findOneAndUpdate(
    //       { _id: userId },
    //       {
    //         $addToSet: {
    //           savedBooks: book,
    //         },
    //       },
    //       { new: true, runValidators: true }
    //     );
    //     return updatedUser;
    //   },
    //   // remove a book from `savedBooks`
    //   removeBook: async (parent, { userId, bookId }) => {
    //     const updatedUser = await User.findOneAndUpdate(
    //       { _id: userId },
    //       { $pull: { savedBooks: { bookId: bookId } } },
    //       { new: true }
    //     );
    //     return updatedUser;
    //   },
  },
};

module.exports = resolvers;