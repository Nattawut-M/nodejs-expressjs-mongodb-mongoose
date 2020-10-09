var express = require('express');
var router = express.Router();

// import [models/blogsDB.js]
const blogsDB = require('../models/blogsDB');

// Blogs Homepage
router.get('/', (req, res, next) => {
   res.render('blogs/index', {hi: "from routes/blogs"});
})

router.get('/add', (req, res, next) => {
   res.render('blogs/addForm');
});

router.post('/add', (req, res, next) => {
   dataForm = new blogsDB({
      article: req.body.article,
      author: req.body.author,
      category: req.body.category
   })
   // call function from 'blogs.js' for save data from 'addForm.js' and insert into MongoDB 'blogDB'
   blogsDB.createNewBlogs(dataForm, (err) => {
      if(err) {
         // console.log(err);
         console.log('error!!');
      }
   })
   // show data 
   console.log(req.body.article);
   console.log(req.body.author);
   console.log(req.body.category);
})

module.exports = router;