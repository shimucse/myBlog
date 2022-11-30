const mongoose = require("mongoose");


const articleSchema = new mongoose.Schema({
   
   title:{
    type:String,
    required:true
   },
   description:{
    type: String
    
  },
   creatTime:{
    type:Date,
    default:new Date()
  }

})
module.exports = mongoose.model("article", articleSchema)