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
    type: Number,
    required: true,
  },
})