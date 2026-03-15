const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Object.Types.ObjectId,
    ref:"Product",
    required: true
  },
  name: String,
  image: String,
  price: String,
  size: String,
  color: String,
  quantity: {
    type: Number,
    default:1
  },
},{_id:false});

const cartSchema = new mongoose.Schema({
  user:{
    type:mongoose.Object.Types.ObjectId,
    ref: "User",
    
  }
 });
module.exports = mongoose.module("Cart",cartSchema)
