const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Object.Types.ObjectId,
    ref:"Product",
    required: true
  },
  name: String,
  name: String,
  name: String,
  name: String,
});
