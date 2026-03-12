const jwt = require("jsonwebtoken")
const User = require("../models/User")


// Middleware to protect routes

const protect = async (req,res,next)=>{
  let token 
  if(req.headers.authorization && )
}