"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.setProduct = exports.getProductByID = exports.getProduct = exports.getAllProducts = void 0;
const node_input_validator_1 = require("node-input-validator");
const productos_1 = __importDefault(require("../models/productos"));
const proveedores_1 = __importDefault(require("../models/proveedores"));
const categorias_1 = __importDefault(require("../models/categorias"));
const helpers_1 = require("../helpers");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // seccion paginador
    let { currentPage, perPage, order, actualPage } = helpers_1.paginador(req);
    try {
        const { count, rows } = yield productos_1.default.findAndCountAll({
            include: [proveedores_1.default, categorias_1.default],
            order: [["ProductID", order]],
            offset: currentPage,
            limit: perPage,
        });
        if (rows.length) {
            res.status(200).json({
                currentPage: actualPage,
                items: rows,
                perPage,
                total: count,
            });
        }
        else {
            res.status(404).json({
                msg: "Not Found",
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: "Internal Server Error",
        });
    }
});
exports.getAllProducts = getAllProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // seccion paginador
    let result = helpers_1.validateQueryName(req);
    if (result) {
        // PREPARAR EL OBJETO DE BUSQUEDA
        //TODO: arreglar busqueda por producto
        try {
            const result = yield productos_1.default.findAll({
                include: [
                    req.query.CategoryName
                        ? {
                            model: categorias_1.default,
                            where: { CategoryName: req.query.CategoryName },
                        }
                        : categorias_1.default,
                    req.query.SupplierName
                        ? {
                            model: proveedores_1.default,
                            where: { CompanyName: req.query.SupplierName },
                        }
                        : proveedores_1.default,
                ],
            });
            if (result.length) {
                res.status(200).json({
                    items: result,
                });
            }
            else {
                res.status(404).json({
                    msg: "Not Found",
                });
            }
        }
        catch (error) {
            res.status(500).json({
                msg: "Internal Server Error",
                error,
            });
        }
    }
    else {
        res.status(417).json({
            msg: "At least one parameter is required",
        });
    }
});
exports.getProduct = getProduct;
const getProductByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield productos_1.default.findByPk(id, {
            include: [proveedores_1.default, categorias_1.default],
        });
        if (result) {
            res.status(200).json({
                items: result,
            });
        }
        else {
            res.status(404).json({
                msg: "Not Found",
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: "Internal Server Error",
            error,
        });
    }
});
exports.getProductByID = getProductByID;
const setProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { body } = req;
    const v = new node_input_validator_1.Validator(body, {
        CategoryID: "required|integer",
        ProductName: "required|string",
        SupplierID: "required|integer",
        QuantityPerUnit: "required|string",
    });
    const result = yield v.check();
    if (!result) {
        res.status(400).json({
            errors: v.errors,
        });
    }
    else {
        try {
            yield productos_1.default.create(req.body);
            res.status(200).json({
                msg: "Product Created",
            });
        }
        catch (error) {
            res.status(500).json({
                msg: "Internal Server Error",
            });
        }
    }
});
exports.setProduct = setProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ProductID = req.params.id;
    let { body } = req;
    const v = new node_input_validator_1.Validator(body, {
        CategoryID: "required|integer",
        ProductName: "required|string",
        SupplierID: "required|integer",
    });
    const result = yield v.check();
    if (!result) {
        res.status(400).json({
            errors: v.errors,
        });
    }
    else {
        try {
            const resultUpdate = yield productos_1.default.update(body, {
                where: {
                    ProductID,
                },
            });
            if (resultUpdate[0] == 1) {
                res.status(200).json({
                    msg: "Product Updated",
                });
            }
            else {
                res.status(404).json({
                    msg: "Product Not Found",
                });
            }
        }
        catch (error) {
            res.status(500).json({
                msg: "Internal Server Error",
                error,
            });
        }
    }
});
exports.updateProduct = updateProduct;
//# sourceMappingURL=productos.js.map