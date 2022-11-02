const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  UserName:{
    type: String,
    required: true,
  },
  Question: {
    type: String,
    required: true,
  },
  categories:{
    type:String,
    enum:["Technology","Programming","History","Science"],
    default:"Technology"
  },
  date: {
    type: String,
    required: true,
  },
  id:{
    type:String
  }
});
const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;
