const express = require("express")
const Product = require("../models/Product")
const protect = require("../middleware/authMiddleware")


const router = express.Router()

// @route POST /api/products
// @access Private/Admin

router.post("/",protect,async(req,res)=>{
  try {
    const {name,description,price,discountPrice,countInStock,category,brand,sizes,image,colors,collections,material,gender,} = req.body
    
  } catch (error) {
    console.log(error);
  }
})
