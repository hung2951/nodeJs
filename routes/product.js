import { Router } from "express";
import { list, post, getProductById, remove, update } from "../controllers/product";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();

router.get('/products', checkAuth, list)
router.get('/product/:id', checkAuth, getProductById)
router.post('/products', checkAuth, post)
router.put('/product/:id', checkAuth, update)
router.delete('/product/:id', checkAuth, remove)
export default router;