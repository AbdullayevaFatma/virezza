const express = require("express")
const Product = require("../models/Product")
const {protect,admin} = require("../middleware/authMiddleware")

const router = express.Router()
// @route GET /api/admin/products
// @desc Get all products (admin only)
// @access Private/Admin

router.get("/",protect,admin,asy(req,res)=>{

})