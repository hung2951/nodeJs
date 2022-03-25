import User from '../models/auth';

export const signUp = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const checkUser = await User.findOne({ email }).exec();
        if (checkUser) {
            res.status(400).json({
                message: "Tài khoản đã tồn tại"
            })
        } else {
            const user = await new User({ name, email, password, role }).save();
            res.json({
                user: {
                    _id: user._id,
                    email: user.email,
                    name: user.name,
                    role: user.role
                }
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "Đăng ký thất bại"
        })
    }
}
export const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            res.status(400).json({
                message: "Tài khoản không tồn tại"
            })
        }
        if (!user.authenticate(password)) {
            res.status(400).json({
                message: "Mật khẩu sai"
            })
        } else {
            res.json({
                message: "Đăng nhập thành công",
                user: {
                    _id: user._id,
                    email: user.email,
                    name: user.name
                }
            })
        }

    } catch (error) {
        console.log(error);
    }
}