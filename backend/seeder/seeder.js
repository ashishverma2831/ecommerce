const mongoose = require("mongoose");
const products = require("./data");
const Product = require("../models/productModel");

const seedProducts = async () => {
  try {
    await mongoose.connect();

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();