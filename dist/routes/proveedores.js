"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedores_1 = require("../controllers/proveedores");
const router = express_1.Router();
router.get("/:id", proveedores_1.getSupplierById);
router.get("/:id/products", proveedores_1.getSupplierProduct);
router.delete("/:id", proveedores_1.removeSupplier);
exports.default = router;
//# sourceMappingURL=proveedores.js.map