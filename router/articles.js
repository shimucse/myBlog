
const express = require('express')
const { model } = require('mongoose')
const article_schema = require('../model/article')

const router = express.Router()


router.get('/',(req,res)=>{
   res.send('hello from article root')
})
router.get('/new',(req,res)=>{
   res.render('new.ejs',{article_schema:new article_schema})
  // res.send("hello from new article")
})
router.post('/',(req,res)=>{
   console.log("new article")
   console.log("new article"+req.body.title)

   console.log("new article"+req.body.description)

})
module.exports = router