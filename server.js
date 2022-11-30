const express = require('express');
const mongoose = require('mongoose')
Router_articles = require('./router/articles')

 mongoose.connect("mongodb://localhost/myblog",{useNewUrlParser:true})

/*const db = mongoose.connection
db.on('open',()=>{
  console.log("database connected")
})*/


var app=express()
app.use(express.urlencoded({extended:true}))

app.use('/articles',Router_articles)
app.set('view engine', 'Ejs')


app.get('/',(req,res)=>{
    //res.send("ds;lfkj")
    res.render('home_page.ejs')
})
app.listen(4000,()=>{
 console.log('server created')
})