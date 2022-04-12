import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cloudinary from 'cloudinary'
import productRoute from '../routes/product';
import postRoute from '../routes/post';
import categoryRoute from '../routes/category'
import userRoute from '../routes/auth'
require('dotenv').config()
const app = express();
// middleware
app.use(cors());
cloudinary.config({
    cloud_name: "hungtv",
    api_key: "652857589973265",
    api_secret: "l3uDbRtL7O0Ew_C-nvHCFuXdL8A"
});
app.use(express.json());
//route products
app.use("/api", productRoute);

//route post
app.use("/api", postRoute);
//route category
app.use('/api', categoryRoute)
//user
app.use(userRoute)
// connect db
// const CONNECT = 'mongodb+srv:// hungtv2951:hung2001@cluster0.ziaqf.mongodb.net/assignment-ts?retryWrites=true&w=majority'
mongoose.connect("mongodb://localhost:27017/we16309")
    .then(() => console.log("Kết nối DB thành công"))
    .catch((error) => console.log(error))
//connect
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
});