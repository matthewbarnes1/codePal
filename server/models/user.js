//* User Model
/* 
TODO: 
- Email
- Username 
- Actual Name 
- Pets (ref) 

*/
// user.js
const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
// const Pet = require('./pets');

const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => emailRegex.test(email),
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    set: (value) => bcrypt.hashSync(value, 10),
  },
  //   pets: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: "Pet",
  //     },
  //   ],
});

const User = model("User", userSchema);
module.exports = User;
