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
      auther: req.body.auther,
      categories: req.body.categories
   })
})

module.exports = router;