const mongodb = require('mongodb');
const mongoose = require('mongoose');
// mongodb + host + port + databaseName
const dbUrl = 'mongodb://localhost:27017/blogDB';

// use 'mongoose' to connection database 'mongodb://localhost:27017/blogDB'
mongoose.connect(dbUrl, {
   useNewUrlParser: true
})
const db = mongoose.connection;

// new schema
const schema = mongoose.Schema;
// new 'blogsSchema'
const blogsSchema = new schema ({
   id: {
      type: schema.ObjectId
   },
   article: {
      type: String,
      required: true
   },
   author: {
      type: String,
      required: true
   },
   category: {
      type: String,
      required: true
   }
})

// exports module
module.exports = mongoose.model("blogs", blogsSchema); // "blogs" is 'Collection Name'

module.exports.createNewBlogs = function(data,callback){
   data.save(callback);
};