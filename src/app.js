import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import productRoute from '../routes/product';
import postRoute from '../routes/post'
const app = express();

// middleware
app.use(cors());
app.use(express.json());
//route products
app.use("/api", productRoute);

//route post
app.use("/api", postRoute);

// connect db
mongoose.connect('mongodb://localhost:27017/we16309')
    .then(() => console.log("Kết nối DB thành công"))
    .catch((error) => console.log(error))
//connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
});