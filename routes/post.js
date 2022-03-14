import { Router } from "express";
import { addPost, getPostById, listPost, remove, update } from "../controllers/post";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();

router.get('/posts', checkAuth, listPost);
router.get('/post/:id', checkAuth, getPostById);
router.post('/posts', checkAuth, addPost);
router.put('/post/:id', checkAuth, update);
router.delete('/post/:id', checkAuth, remove)
export default router