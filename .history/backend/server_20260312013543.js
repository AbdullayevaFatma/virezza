const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const userRoutes = require("../")

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()

const PORT = process.env.PORT || 9000

connectDB()

app.get("/",(req,res)=>{res.send("WELCOME")})

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)})