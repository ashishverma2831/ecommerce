const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectDB = require('./Db/db');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;


// import routes
const UserRouter = require('./routers/userRouter');

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


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
