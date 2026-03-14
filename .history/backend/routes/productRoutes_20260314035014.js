const express = require("express")
const Product = require("../models/Product")
const protect = require("../middleware/authMiddleware")


const router = express.Router()

// @route POST /api/products
// @access Private/Admin

router.post("/",protect,async(req,res)=>{
  try {
    const {name,description,price,discountPrice,countInStock,category,brand,sizes,images,colors,collections,material,gender,isFeatured,isPublished,dimensions,tags,weight,sku} = req.body

    
    
  } catch (error) {
    console.log(error);
  }
})
