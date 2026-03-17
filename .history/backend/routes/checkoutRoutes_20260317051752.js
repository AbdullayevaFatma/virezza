const express = require("express");
const Checkout = require("../models/C");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route POST /api/products
// @access Private/Admin



module.exports = router;
