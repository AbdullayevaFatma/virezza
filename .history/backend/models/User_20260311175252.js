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
    enum:["customer","admin"],
    default:"customer"
  },
},{timestamps: true})


// Password Hash Middleware
userSchema.pre("save",async function (next) {
  if(!this.isModified("password")) return next()
    const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
  next()
})

// Match User 