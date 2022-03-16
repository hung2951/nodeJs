import Post from "../models/post";
// danh sách
export const listPost = async (req, res) => {
    try {
        const listPost = await Post.find();
        res.json(listPost)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}
// lấy 1 bài viết
export const getPostById = async (req, res) => {
    try {
        const getPostById = await Post.findById(req.params.id)
        res.json(getPostById)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được :))"
        })
    }

}
// thêm post
export const addPost = async (req, res) => {
    try {
        const addPost = await Post(req.body).save()
        res.json(addPost)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được :))"
        })
    }

}
// update bài viết
export const update = async (req, res) => {
    try {
        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatePost)
    } catch (error) {
        res.status(400).json({
            message: "Không sửa được :))"
        })
    }
}
//xóa bài viết
export const remove = async (req, res) => {
    try {
        const Remove = await Post.findByIdAndDelete(req.params.id);
        res.json(Remove)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa đc :)"
        })
    }

}