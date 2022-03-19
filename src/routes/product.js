import { Router } from "express";
import { create, list, read, remove } from "../controllers/product";

const router = Router();

router.get("/products", list);
router.get("/products/:id", read);
router.delete("/products/:id", remove);
router.post("/products", create);

export default router;
