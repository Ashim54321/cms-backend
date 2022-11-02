const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    },
    replies:[
        {
            userId:{
                type:String,
                required:true
            },
            userName:{
                type:String
            }
        }
    ]
})