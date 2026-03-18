const express = require("express")
const User = require("../models/User")
const {protect,admin} = require("../middleware/authMiddleware")

const router = express.Router()

//@route GET /api/admin/users
// @desc Get all users (Admin only)
// @access Private /Admin

router.get("/",protect,admin,async(req,res)=>{
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    console.error(error);
    res.status(500).json({message:"Server error"})
    
  }
})
//@route POST /api/admin/users
// @desc Add a new user (Admin only)
// @access Private /Admin

router.post("/",protect,admin,async(req,res)=>{

  const {name,email,password,role}= req.body

  
  try {
    let  user = await User.findOne({email})
    if(user){
      return res.status(400).json({message:"U"})
    }
    res.json(users)
  } catch (error) {
    console.error(error);
    res.status(500).json({message:"Server error"})
    
  }
})

module.exports=router