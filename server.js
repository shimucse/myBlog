const express = require('express');
const mongoose = require('mongoose')
Router_articles = require('./router/articles')
const article_schema = require('./model/article')

 mongoose.connect("mongodb://localhost/myblog",{useNewUrlParser:true})

/*const db = mongoose.connection
db.on('open',()=>{
  console.log("database connected")
})*/


var app=express()
app.use(express.urlencoded({extended:true}))

app.use('/articles',Router_articles)
app.set('view engine', 'Ejs')


app.get('/',async(req,res)=>{
    const article = await article_schema.find().sort({
      creatTime:'desc' })
   


    res.render('home_page.ejs',{article_schema: article})

})
app.listen(4000,()=>{
 console.log('server created')
})