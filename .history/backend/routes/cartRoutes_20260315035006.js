const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

//@route POST /api/cart
//@desc add a product to the cart for a guest or logged in user
// @access PUBLIC

router.post("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  try {
    const product = await Product.findById(productId)
    if(!prod)
  } catch (error) {
    
  }
});
