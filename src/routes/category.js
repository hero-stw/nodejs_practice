import { Router } from "express";
import { list, create, read, update, remove } from "../controllers/category";

const router = Router();

router.get("/category", list);
router.get("/category/:id", read);
router.post("/category", create);
router.put("/category/:id", update);
router.delete("/category/:id", remove);

export default router;
