import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/category";
const router = Router();

router.post('/category', create);
router.get('/product_by_cate/:id', read);
router.get('/category', list);
router.delete('/category/:id', remove);
router.delete('/category/:id', update);

export default router;