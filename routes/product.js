import { Router } from "express";
import { list, post, getProductById, remove, update } from "../controllers/product";
import { checkAuth, isAuth, isAdmin, requireSignin } from "../middlewares/checkAuth";
const router = Router();

router.get('/products', checkAuth, list)
router.get('/product/:id', checkAuth, getProductById)
router.post('/products/:userId', requireSignin, isAuth, isAdmin, post)
router.put('/product/:id', checkAuth, update)
router.delete('/product/:id', checkAuth, remove)
export default router;