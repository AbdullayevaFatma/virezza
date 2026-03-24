const express = require("express");
const Order = require("../models/Order");
const { protect, admin } = require("../middleware/authMiddleware");


const router = express.Router()

//@route GET /api/admin/orders
//@desc get all orders (admin only)
// @access private/admin

router.get("/",protect,admin,async(req,res)=>{
  try {
    const orders = await Order.find({}).populate("user","name email")
    res.json(orders)
  } catch (error) {
    console.error(error);
    res.status(500).json({message:"Server error"})
    
  }
})


// @route PUT /api/admin/orders/:id
// desc Update order status
// access 

router.put("")

module.exports = router