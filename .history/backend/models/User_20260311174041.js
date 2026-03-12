const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    trim: true,
    required:true
  },
  email:{}
})