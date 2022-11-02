const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    UserName: {
      type: String,
      required: true,
    },
    UserImg:{
       type: String,
       required:true
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("Post",PostSchema);
module.exports= Post;

    