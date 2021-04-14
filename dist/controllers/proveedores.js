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
exports.removeSupplier = exports.getSupplierProduct = exports.getSupplierById = void 0;
const productos_1 = __importDefault(require("../models/productos"));
const proveedores_1 = __importDefault(require("../models/proveedores"));
const getSupplierById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let SupplierID = req.params.id;
    try {
        const resultSupplier = yield proveedores_1.default.findOne({
            where: {
                SupplierID,
            },
        });
        if (resultSupplier) {
            res.status(200).json({
                resultSupplier,
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
exports.getSupplierById = getSupplierById;
const getSupplierProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let SupplierID = req.params.id;
    try {
        const resultSupplier = yield proveedores_1.default.findOne({
            where: {
                SupplierID,
            },
            include: [productos_1.default],
        });
        if (resultSupplier) {
            res.status(200).json({
                resultSupplier,
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
exports.getSupplierProduct = getSupplierProduct;
const removeSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let SupplierID = req.params.id;
    try {
        const resultSupplier = yield proveedores_1.default.destroy({
            where: {
                SupplierID: SupplierID,
            },
        });
        if (resultSupplier == 1) {
            res.status(200).json({
                msg: "Supplier Deleted",
            });
        }
        else {
            res.status(404).json({
                msg: "Supplier Not Found",
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
exports.removeSupplier = removeSupplier;
//# sourceMappingURL=proveedores.js.map