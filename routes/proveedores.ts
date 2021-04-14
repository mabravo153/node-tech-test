import { Router } from "express";
import {
  removeSupplier,
  getSupplierById,
  getSupplierProduct,
} from "../controllers/proveedores";

const router = Router();

router.get("/:id", getSupplierById);
router.get("/:id/products", getSupplierProduct);
router.delete("/:id", removeSupplier);

export default router;
