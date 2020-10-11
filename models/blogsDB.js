const mongodb = require('mongodb');
const mongoose = require('mongoose');
// mongodb + host + port + databaseName
const dbUrl = 'mongodb://localhost:27017/blogDB';

// use 'mongoose' to connection database 'mongodb://localhost:27017/blogDB'
mongoose.connect(dbUrl, {
   useNewUrlParser: true
})
const conn = mongoose.connection;

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
const db = module.exports = mongoose.model("blogs", blogsSchema); // "blogs" is 'Collection Name'

// module save data
module.exports.createNewBlogs = function(data,callback){
   data.save(callback);
};

// module fetch data from database 'blogDB' collection 'blogs'
module.exports.showAllData = (data) => {
   db.find(data);
};

// module delete data by _id
module.exports.deleteBlog = (id, callback) => {
   db.findByIdAndDelete(id, callback);
};

// get id of blogs
module.exports.getBlogsId = (id, callback) => {
   let query = {
      _id: id // check _id == id (from parameters)
   }
   // find 
   db.findOne(query, callback) ;
}
