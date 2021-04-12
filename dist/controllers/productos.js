"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.setProduct = exports.getProductByID = exports.getProduct = exports.getAllProducts = void 0;
const getAllProducts = (req, res) => {
    const search = req.query;
    res.json({
        msg: "funciona getAllProducts",
        request: search
    });
};
exports.getAllProducts = getAllProducts;
const getProduct = (req, res) => {
    const search = req.query;
    res.json({
        msg: "funciona getProduct",
        request: search
    });
};
exports.getProduct = getProduct;
const getProductByID = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "funciona getProductByID ",
        request: id
    });
};
exports.getProductByID = getProductByID;
const setProduct = (req, res) => {
    const body = req.body;
    res.json({
        msg: "funciona setProduct",
        request: body
    });
};
exports.setProduct = setProduct;
const updateProduct = (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        msg: "funciona",
        request: `${body} ${id}`
    });
};
exports.updateProduct = updateProduct;
//# sourceMappingURL=productos.js.map