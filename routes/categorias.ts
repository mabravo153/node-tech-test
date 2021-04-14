import { Router } from "express";
import { getAllCategories } from "../controllers/categorias";

const router = Router();

router.get("/:id/products", getAllCategories);

export default router;
