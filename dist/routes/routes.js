"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("../controllers/productos");
const router = express_1.Router();
router.get('/products?', productos_1.getAllProducts);
router.get('/products/search?', productos_1.getProduct);
router.get('/products/:id', productos_1.getAllProducts);
router.post('/products', productos_1.setProduct);
router.put('/products/:id', productos_1.updateProduct);
exports.default = router;
//# sourceMappingURL=routes.js.map