const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description:{
     type:String,
     required:true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  images: [
    {
      public_id: {
        type: String,
        required: false,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  history:{
    type:String,
    required:true
  },
  courseType:{
    type:String,
    enum:['Paid','Unpaid'],
    default: "Unpaid"
  },
  requirements: [
    {
      public_id: {
        type: String,
        required: false,
      },
      points: {
        type: String,
        required: true,
      },
    },
  ],
});

const course = mongoose.model("Course",courseSchema);

module.exports = course;