const express = require("express")
const cors = require("cors")
const dotenv = req


const app = express()

app.use(express.json())
app.use(cors())


const PORT = 9000

app.get("/",(req,res)=>{res.send("WELCOME")})

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)})