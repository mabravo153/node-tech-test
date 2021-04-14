"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categorias_1 = require("../controllers/categorias");
const router = express_1.Router();
router.get("/:id/products", categorias_1.getAllCategories);
exports.default = router;
//# sourceMappingURL=categorias.js.map