const express = require("express");
const Subscribe = require("../models/Subscribe");

const router = express.Router()

// @route POST /api/subscribe
// @desc Handle newsletter subscription
// @Public

router.post("/subscribe",async(req,res)=>{
  const {email} = req.body
  if(!email){
    return res.status(400).json({message:"Email is required"})
  }

  try {
    // Check if email is already subscribed
    let subscribe = await Subscribe.findOne({email})

    if(subscribe){
      return res.status(400).json({message:"Email is already subscribed"})
    }
    // Create a new subscriber
    subscribe = new Subscribe({email})
    await subscriber.save()
    res.status(201).json({message:"Successfully subscribed to the newsletter!"})
  } catch (error) {
    console.error(error);
    res.status(500).json({message:"Server error"})
    
  }
})

module.exports = router