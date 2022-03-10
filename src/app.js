import express from 'express';
import cors from 'cors';
import productRoute from '../routes/product';
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use(productRoute);

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