import { Router } from "express";
import { list, signIn, signUp } from "../controllers/auth";

const router = Router();
router.post('/signup', signUp);
router.post('/signin', signIn)
router.get('/users', list)

export default router;