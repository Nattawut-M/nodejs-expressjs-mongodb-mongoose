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
   }
})