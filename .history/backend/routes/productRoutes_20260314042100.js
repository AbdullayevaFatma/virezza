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

router.put("/:id",protect,admin,async(req,res)=>{
try {
   const {name,description,price,discountPrice,countInStock,category,brand,sizes,images,colors,collections,material,gender,isFeatured,isPublished,dimensions,tags,weight,sku} = req.body
  //Find product by Id
  const product = await Product.findById(req.params.id)
  if(product){
    product.name=name || product.name
    product.description=description || product.description
    product.price=price || product.price
    product.discountPrice=discountPrice || product.discountPrice
    product.countInStock=countInStock || product.countInStock
    product.category=category || product.category
    product.= || product.
    product.name=name || product.name
    product.name=name || product.name
    product.name=name || product.name
    product.name=name || product.name
    product.name=name || product.name
    product.name=name || product.name
    product.name=name || product.name
    product.name=name || product.name
    product.name=name || product.name
    product.name=name || product.name
    product.name=name || product.name
    product.name=name || product.name
    product.name=name || product.name
    product.name=name || product.name
    product.name=name || product.name
  }

} catch (error) {
  
}
})

module.exports = router;