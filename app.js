const http = require('http');
const express = require('express');
const app = express();

// middleware
const check = (req, res, next) => {
    const status = false;
    if (status) {
        console.log("hello");
        next();
    } else {
        res.send('Không có quyền truy cập')
    }
}
// app.use(check);
// app.use((req, res) => {
//     console.log("Bước 2");
// })
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
})
app.get('/api/products', check, (req, res) => {
    const products = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
    ];
    res.json(products)
})
// const server = http.createServer((req, res) => {
//     console.log('url', req.url);
//     if (req.url === "/") {
//         res.setHeader('Content-Type', 'text/html');
//         res.write("<html><body><h1>Home page</h1></body></html>");
//         res.end();
//     } else if (req.url === "/api/product") {
//         const products = [
//             { id: 1, name: "Product A" },
//             { id: 2, name: "Product B" },
//         ];
//         res.end(JSON.stringify(products))
//     }
//     else {
//         console.log("Đường dẫn không tồn tại");
//     }
// });
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
});