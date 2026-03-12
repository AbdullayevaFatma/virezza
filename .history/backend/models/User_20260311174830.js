const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    trim: true,
    required:true
  },
  email:{
     type: String,
    trim: true,
    required:true,
    unique: true,
    match:[/.+\@.+\..+/,"Please enter a valid email address"]
  },
  password:{
     type: String,
    trim: true,
    required:true,
    minLength:8
  },
  role:{
    type:String,
    enum:["customer"]
  }
})