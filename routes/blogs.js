var express = require('express');
var router = express.Router();

// 'check' = check request data from form, 'validationResult' = resualt of validate(error)
const {check, validationResult} = require('express-validator');

// import [models/blogsDB.js]
const blogsDB = require('../models/blogsDB');

// Blogs Homepage
router.get('/', (req, res, next) => {

   blogsDB.showAllData((err, blogs) => {
      if(err) throw err;

      res.render('blogs/index', {hi: "from routes/blogs", blogsData: blogs});
   });
   
})

router.get('/add', (req, res, next) => {
   res.render('blogs/addForm');
});

router.post('/add', [
   // check data from request 
   check("article", "กรุณาใส่ชื่อบทความ").not().isEmpty(), 
   check("author", "กรุณาใส่ชื่อผู้แต่ง").not().isEmpty() 
], (req, res, next) => {
   // push 'req' to parameter for check 'null' data from forms, then assign values into 'results'
   const results = validationResult(req);
   // 'results.errors' return 'key', 'values' = about errors
   const err = results.errors;
   // loop for console.log (show debug)
   for (var key in err) {
      console.log(err[key].value);
   }
   // if 'req' has 'null' input
   if (!results.isEmpty()) {
      // กรณีมีค่าว่าง
      res.render('blogs/addForm', {
         errors: err
      });
   } else {
      // กรณี "ไม่มี" ค่าว่าง
      dataForm = new blogsDB({
         article: req.body.article,
         author: req.body.author,
         category: req.body.category
      })
      // call function from 'blogs.js' for save data from 'addForm.js' and insert into MongoDB 'blogDB'
      blogsDB.createNewBlogs(dataForm, (err) => {
         if(err) {
            console.log(err);
            console.log('error!!');
         }
         res.redirect('/blogs');
      })
      // show data 
      console.log(req.body.article);
      console.log(req.body.author);
      console.log(req.body.category);
   }
})

// delete
router.get('/delete/:id', (req, res, next) => {
   blogsDB.deleteBlog(req.params.id, (err) => {
      if (err) throw err;
      res.redirect('/blogs');
   })
});

// edit
router.get('/edit/:id', (req, res, next) => {
   // console.log(req.params.id);
   blogsDB.getBlogsId(req.params.id, (err, data) => {
      if (err) throw err;
      res.render('blogs/editForm');
   })
})
module.exports = router;