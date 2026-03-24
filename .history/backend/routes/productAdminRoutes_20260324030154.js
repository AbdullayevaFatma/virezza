const express = require("express")
const Product = require("../models/Product")
const {protect,admin} = require("../middleware/authMiddleware")


// @route GET /api/