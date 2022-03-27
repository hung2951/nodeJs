import mongoose from "mongoose";
import { createHmac } from 'crypto'
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        default: 0
    },
    role: {
        type: Number,
        required: true
    }
}, { timestamps: true });

userSchema.methods = {
    authenticate(password) {
        return this.password == this.encrytPassword(password);
    },
    encrytPassword(password) {
        if (!password) return
        try {
            return createHmac("sha256", "12345").update(password).digest("hex");
        } catch (error) {
            console.log(error)
        }
    }
}
// trước khi execute .save() thì chạy middleware sau.
userSchema.pre("save", function (next) {
    this.password = this.encrytPassword(this.password);
    next();
})

export default mongoose.model('User', userSchema)