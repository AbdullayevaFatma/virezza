const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

const getCart = async(userId,guestId)=>{
if(userId){
  return await Cart.findOne({user:userId})
}else if (guestId){
  return await Cart.findOne({guestId})
} return null
}

//@route POST /api/cart
//@desc add a product to the cart for a guest or logged in user
// @access PUBLIC

router.post("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  try {
    const product = await Product.findById(productId)
    if(!product) return res.status(404).json({message:"Product not found"})
// Determine user is a guest or logged in user
let cart = await getCart(userId,guestId)

// if cart exists update it
if(cart){
  const productIndex = cart.products.findIndex((p)=>p.productId.toString()===productId && p.size ===size && p.color===color)

  if(productIndex)
}
  } catch (error) {
    
  }
});
