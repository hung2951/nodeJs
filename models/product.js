
import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Product', productSchema);