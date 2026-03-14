const express = require("express")
const Product = require("../models/Product")
const {protect,admin} = require("../middleware/authMiddleware")


const router = express.Router()

// @route POST /api/products
// @access Private/Admin

router.post("/",protect,admin,async(req,res)=>{
  try {
    const {name,description,price,discountPrice,countInStock,category,brand,sizes,images,colors,collections,material,gender,isFeatured,isPublished,dimensions,tags,weight,sku} = req.body

    const product = new Product({name,description,price,discountPrice,countInStock,category,brand,sizes,images,colors,collections,material,gender,isFeatured,isPublished,dimensions,tags,weight,sku,user:req.user._id})

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error")
  }
})

// @route PUT /api/products/:id
// @access Private/Admin

router.put("/")

module.exports = router;