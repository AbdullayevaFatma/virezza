const express = require("express");
const Subscriber = require("../models/Subscriber");

const router = express.Router()

// @route POST /api/subscribe
// @desc Handle newsletter subscription
// @Public

router.post("/subscribe",async(req,res)=>{
  const {email} = req.body
  if(!email){
    return res.status()
  }
})