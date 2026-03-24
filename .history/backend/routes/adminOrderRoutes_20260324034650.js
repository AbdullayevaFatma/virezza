const express = require("express");
const Order = require("../models/Order");
const { protect, admin } = require("../middleware/authMiddleware");


const router = express.Router()

//@route GET /api/admin/orders
//@desc get all orders (admin only)
// @access private/admin

router.get("/")