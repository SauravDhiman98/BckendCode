const mongoose = require('mongoose');


const Color = new mongoose.Schema(

    {
      colorcode: {
        type:String,
        index:true
      },
      topic:
      {   
             type:mongoose.Schema.Types.ObjectId,
             ref:'Topic'
      }
    },{timestamps:true})

    module.exports = mongoose.model("Color", Color);