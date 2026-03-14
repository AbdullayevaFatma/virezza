const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  description:{
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  discountPrice:{
    type: Number,
    required: true,
  },
  countInStock:{
    type: Number,
    required: true,
    default:0
  },
  sku:{
    type: String,
    unique: true,
    required: true,
  },
  category:{
    type: String,
    required: true,
  },
  brand:{
    type: String,
  },
  sizes:{
    type: [String],
    required: true,
  },
  colors:{
    type: [String],
    required: true,
  },
  collections:{
    type: String,
    required: true
  },
  material:{
    type: String
  },
  gender:{
    type:String,
    enum:[]
  }
})