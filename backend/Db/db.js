const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Database connection successful");
    } catch (error) {
        console.log("Database connection failed: ", error);   
    }
}

module.exports = connectDB;