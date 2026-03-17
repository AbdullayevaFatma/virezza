const express = require("express");
const Checkout = require("../models/Checkout");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const Order = require("../models/Order");
const {protect} = require("../middleware/authMiddleware")

const router = express.Router();

// @route POST /api/checkout
// @desc create a new checkout session
// @access Private

router.post("/",protect,async(req,res))



module.exports = router;
