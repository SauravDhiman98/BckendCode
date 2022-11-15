const mongoose = require('mongoose');


const UserData = new mongoose.Schema(

    {
      name: String,
      topics:[
      {   
             type:mongoose.Schema.Types.ObjectId,
             ref:'Topic'
      }
    ]
    },{timestamps:true})

    module.exports = mongoose.model("User", UserData);