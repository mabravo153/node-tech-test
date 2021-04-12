"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("../controllers/productos");
const router = express_1.Router();
router.get('/', productos_1.getAllProducts);
router.get('/search', productos_1.getProduct);
router.get('/:id', productos_1.getProductByID);
router.post('/', productos_1.setProduct);
router.put('/:id', productos_1.updateProduct);
exports.default = router;
//# sourceMappingURL=productos.js.map