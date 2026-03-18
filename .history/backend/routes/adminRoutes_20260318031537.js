const express = require("express")
const User = require("../models/User")
const {protect,admin} = require("../middleware/authMiddleware")

const router = express.Router()

//@route GET /admin/users
// @desc Get all users (Admin only)
// @access Private /Admin

router.get("/",protect,admin)