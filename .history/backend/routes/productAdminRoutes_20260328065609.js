const express = require("express")
const Product = require("../models/Product")
const {protect,admin} = require("../middleware/authMiddleware")

const router = express.Router()
// @route GET /api/admin/products
// @desc Get all products (admin only)
// @access Private/Admin

router.get("/",protect,admin,async(req,res)=>{
try {
  const products = await Product.find({})
  res.json(products)
} catch (error) {
  console.log(error);
}
})

// @route POST /api/admin/products
// @desc Create a new product (admin only)
// @access Private/Admin

router.post("/", protect, admin, async (req, res) => {
  try {
    const { name, description, price, discountPrice, countInStock, sku, category, sizes, colors, collections, material, gender, images } = req.body;

    const product = new Product({
      name, description, price, discountPrice, countInStock, sku, category, sizes, colors, collections, material, gender, images,
      user: req.user._id,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router