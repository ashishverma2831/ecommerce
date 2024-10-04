const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectDB = require('./Db/db');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/error.js');

const app = express();
const port = process.env.PORT || 3000;

// handle uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception');
    process.exit(1);
});


// import routes
const UserRouter = require('./routers/userRouter');
const ProductRouter = require('./routers/productRouter');


// middlewares
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL
}));
app.use(cookieParser());

// database connection
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// routes
app.use('/api/users', UserRouter);
app.use('/api/products', ProductRouter);
app.use(errorMiddleware);


const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', err => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhandled promise rejection');
    server.close(() => {
        process.exit(1);
    });
});