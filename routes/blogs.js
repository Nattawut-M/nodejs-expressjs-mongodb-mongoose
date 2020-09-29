var express = require('express');
var router = express.Router();

// Blogs Homepage
router.get('/', (req, res, next) => {
   res.render('blogs/index', {hi: "from routes/blogs"});
})

module.exports = router;