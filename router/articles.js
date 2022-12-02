
const express = require('express')
const { model } = require('mongoose')
const article_schema = require('../model/article')

const router = express.Router()

router.get('/',(req,res)=>{
   res.send('hello from article root')
})
router.get('/new',(req,res)=>{
   res.render('new.ejs',{article_schema:new article_schema()})
  // res.send("hello from new article")
})
router.get('/:id',async(req,res)=>{
  
   const idfind = await  article_schema.findById(req.params.id)

   //console.log(idfind)
   if(idfind == null){
        console.log("id not in database")
        res.redirect('/')
   }else{
      res.render('show.ejs', {article_schema: idfind})

   }

  
})
router.post('/',async(req,res,next)=>{
    let newData = new article_schema
    ({
       title : req.body.title,
       description:req.body.description,
       id:req.body.id
   })
   try{
      newData = await newData.save()
      
      res.redirect(`/articles/${newData.id}`)
   }
   catch(e){
      console.log("error"+e)
      res.render('article/new',{article_schema:newData})
   }
 
   

   next()

})
module.exports = router