const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const noteSchema = new Schema({
    UserName:{
        type:String,
        required:true
    },
    Note:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});
const Note = mongoose.model('Note',noteSchema);
module.exports = Note;