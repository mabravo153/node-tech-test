import { Router } from "express";
import {
  getAllProducts,
  getProduct,
  setProduct,
  updateProduct,
  getProductByID,
} from "../controllers/productos";

const router = Router();

router.get("/", getAllProducts);
router.get("/search", getProduct);
router.get("/:id", getProductByID);

router.post("/", setProduct);

router.put("/:id", updateProduct);

export default router;
