const mongoose = require('mongoose');
const PostSchema = require('./post');
const Schema = mongoose.Schema;
// this allows us to create a schema for our use model.
// schema says 'I expect model to have properties and the data we expect those properties to be'


// Model represents all of the data in a single collection in our mongo database
// once we create the model, mongoose will create a collection in our data

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.']
  },
  postCount: Number,
  posts: [PostSchema]
});
// now we can feed this into mongoose to create a user model
// schema tells the model the properties they expect the model to have
// mongoose says 'hey mongo, do you have a collection called user' if not it creates it.
// second arg tells mongo what we expect the model to looks like
// User is a user model class (capital U). Represets the entire collection of data in our database.
const User = mongoose.model('user', UserSchema);

module.exports = User;
