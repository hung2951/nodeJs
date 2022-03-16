import User from "../models/user";

export const listUser = async (req, res) => {
    try {
        const listUser = await User.find();
        res.json(listUser);
    } catch (error) {
        res.status(400).json({
            message: "hi"
        })
    }
}
export const addUser = async (req, res) => {
    try {
        const addUser = await new User(req.body).save();
        res.json(addUser);
    } catch (error) {
        res.status(400).json({
            message: "hi"
        })
    }

}
export const signIn = async (req, res) => {
    try {


    } catch (error) {
        res.status(400).json({
            message: "Đăng nhập thất bại"
        })
    }
}
