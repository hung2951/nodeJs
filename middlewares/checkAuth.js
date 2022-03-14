export const checkAuth = (req, res, next) => {
    const status = true;
    if (status) {
        console.log("hello");
        next();
    } else {
        res.send('Không có quyền truy cập')
    }
}