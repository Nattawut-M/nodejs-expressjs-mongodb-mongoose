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

module.exports = router;