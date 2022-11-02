const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["User", "Admin", "SuperAdmin"],
    default: "User",
  },
  address: {
    type: String,
    default: "Undefined",
  },
  city: {
    type: String,
    default: "Undefined",
  },
  phone: {
    type: Number,
    default: 0,
    length: 10,
  },
  about: {
    type: String,
    default: "Undefined",
    maxlength: 500,
  },
  images: [
    {
      public_id: {
        type: String,
        required: false,
      },
      url: {
        type: String,
        default:""
      },
    },
  ],
},{
  timestamps: true,
});

const user = mongoose.model("User", userSchema);

module.exports = user;
