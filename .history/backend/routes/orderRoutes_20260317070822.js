const express = require("express");
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @route GET /api/orders/my-orders
// @desc get logged-in user s orders
// @access Private

router.get("/my-orders", protect, async (req, res) => {
  try {
    // find orders for the authenticated user
    const orders = await Order.find({
      user: req.user._id
    }).sort({createdAt:-1});
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route GET /api/orders/:id
// @desc get order details by ID
// @access Private

router.get("/:id/pay", protect, async (req, res) => {
  const { paymentStatus, paymentDetails } = req.body;

  try {
    const checkout = await Checkout.findById(req.params.id);
    if(!checkout){
      return res.status(404).json({message:"Checkout not found"})
    }
    if(paymentStatus === "paid"){
     checkout.isPaid = true
     checkout.paymentStatus = paymentStatus
     checkout.paymentDetails= paymentDetails
     checkout.paidAt = Date.now()
     await checkout.save()

     res.status(200).json(checkout);
    }else{
      res.status(400).json({ message: "Invalid Payment Status" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


// @route POST /api/checkout/:id/finalize
// @desc finalize checkout and convert to an order after payment confirmation
// @access Private

router.post("/:id/finalize", protect, async (req, res) => {
  try {
    const checkout = await Checkout.findById(req.params.id);
    if(!checkout){
      return res.status(404).json({message:"Checkout not found"})
    }
   if(checkout.isPaid && !checkout.isFinalized){
    //create final order based on the checkout details
    const finalOrder = await Order.create({
      user:checkout.user,
      orderItems:checkout.checkoutItems,
      shippingAddress:checkout.shippingAddress,
      paymentMethod:checkout.paymentMethod,
      totalPrice:checkout.totalPrice,
      isPaid:true,
      paidAt:checkout.paidAt,
      isDelivered:false,
      paymentStatus:"paid",
      paymentDetails:checkout.paymentDetails
    })
    checkout.isFinalized= true
    checkout.finalizedAt= Date.now()
    await checkout.save()
    //delete the cart associated with the user
    await Cart.findOneAndDelete({user: checkout.user})
    res.status(201).json(finalOrder)
   }else if(checkout.isFinalized){
    res.status(400).json({message:"Checkout already finalized"})
   }else{
    res.status(400).json({message:"Checkout is not paid"})
   }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
