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
    
  },
});
