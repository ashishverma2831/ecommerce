const mongoose = require("mongoose");
const products = require("./data");
const tshirts = require("./tshirts");
const Product = require("../models/productModel");

const seedProducts = async () => {
  try {
    await mongoose.connect('mongodb+srv://root:root@cluster0.ve2kz8r.mongodb.net/ecommerce?retryWrites=true&w=majority');

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(tshirts);
    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();