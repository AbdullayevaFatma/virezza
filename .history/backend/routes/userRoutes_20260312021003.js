const express = require("express")
const User = require("../models/User")
const jwt = require("jsonwebtoken")

const router = express.Router()

router.post("/register",async(req,res)=>{
  const {name,email,password} = req.body
try {
  let user = await User.findOne({email})
  if(user) return 
  await user.save()

  res.send(201).json({
    user:{
      _id: user._id,
      name: user.name,
      email:user.email
    }
  })
} catch (error) {
  console.log(error);
  res.status(500).send("Server error")
}
})

module.exports = router