const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const products = require("./data/products");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seedData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    //Create a default admin User
    const createdUser = await User.create({
      name: "Admin user",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    // Assign default user ID to each product
    const userId = createdUser._id
    const sampleProducts = products.map((product)=>{
      return {...product}
    })
  } catch (error) {}
};
