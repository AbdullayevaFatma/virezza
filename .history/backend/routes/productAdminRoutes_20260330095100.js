const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();


router.get("/", protect, admin, async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});


router.post(
  "/",
  protect,
  admin,
  upload.array("images"), 
  async (req, res) => {
    try {
      const { name, description, price, discountPrice, countInStock, sku, category, sizes, colors, collections, material, gender, tags } = req.body;

      const images = req.files?.map(file => ({
        url: file.path || file.secure_url,
        altText: "",
      })) || [];

      const product = new Product({
        name,
        description,
        price,
        discountPrice,
        countInStock,
        sku,
        category,
        sizes: sizes ? sizes.split(",").map(s => s.trim()) : [],
        colors: colors ? colors.split(",").map(c => c.trim()) : [],
        collections,
        material,
        gender,
        tags: tags ? tags.split(",").map(t => t.trim()) : [],
        images,
        user: req.user._id,
      });

      const createdProduct = await product.save();
      res.status(201).json(createdProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  }
);

module.exports = router;