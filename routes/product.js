import { Router } from "express";
import { list, post, getProductById, remove, update, search } from "../controllers/product";
import { userById } from "../controllers/user";
import { isAuth, isAdmin, requireSignin } from "../middlewares/checkAuth";
const router = Router();

router.get('/products', list)
router.get('/product/:id', getProductById)
router.post('/products/:userId', requireSignin, isAuth, isAdmin, post)
router.put('/product/:id/:userId', requireSignin, isAuth, isAdmin, update)
router.delete('/product/:id/:userId', requireSignin, isAuth, isAdmin, remove)
router.post('/search', search)
router.param('userId', userById)
export default router;