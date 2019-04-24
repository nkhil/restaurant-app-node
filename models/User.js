const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const md5 = require("md5");
const validator = require("validator");
const mongoDbErrorHandler = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Invalid Email address"],
    required: "Please supply an email address"
  },
  name: {
    type: String,
    required: "Please supply a name",
    trim: true
  }
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });
userSchema.plugin(mongoDbErrorHandler);

module.exports = mongoose.model("User", userSchema);
