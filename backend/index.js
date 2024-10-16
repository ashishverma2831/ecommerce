const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectDB = require('./Db/db');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/error');

const app = express();
const port = process.env.PORT || 3000;

// handle uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception');
    process.exit(1);
});

// middlewares
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(cookieParser());

// database connection
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// import routes
const UserRouter = require('./routers/userRouter');
const ProductRouter = require('./routers/productRouter');
const OrderRouter = require('./routers/orderRouter');  

// routes
app.use('/api/users', UserRouter);
app.use('/api/products', ProductRouter);
app.use('/api/orders', OrderRouter);

// Middleware to handle errors
app.use(errorMiddleware);


const server = app.listen(port, () => {
    console.log(`Server is running on port ${port} in ${process.env.NODE_ENV} mode`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', err => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhandled promise rejection');
    server.close(() => {
        process.exit(1);
    });
});