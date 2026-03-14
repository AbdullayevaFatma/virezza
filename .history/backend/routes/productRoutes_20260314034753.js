const express = require("express")
const Product = require("../models/Product")
const protect = require("../middleware/authMiddleware")


const router = express.Router()

// @route POST /api/products
// @access Private/Admin

router.post("/",protect,async(req,res)=>{
  try {
    
  } catch (error) {
    console.log(error);
  }
})
