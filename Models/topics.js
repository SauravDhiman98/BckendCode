const mongoose = require('mongoose')

const Topic = mongoose.Schema(
    {
        title: String,
        content: String,
        percentage: Number,
        color:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Color'
        }
    ],
        user:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'UserData'
        }
    } 
)

module.exports = mongoose.model("Topic", Topic) 