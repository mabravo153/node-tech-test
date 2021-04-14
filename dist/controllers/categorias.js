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
exports.getAllCategories = void 0;
const helpers_1 = require("../helpers");
const productos_1 = __importDefault(require("../models/productos"));
const categorias_1 = __importDefault(require("../models/categorias"));
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // seccion paginador
    let CategoryID = req.params.id;
    let { currentPage, perPage, order, actualPage } = helpers_1.paginador(req);
    try {
        const resultCategory = yield categorias_1.default.findOne({
            where: {
                CategoryID,
            },
            include: [productos_1.default],
        });
        if (resultCategory) {
            res.status(200).json({
                resultCategory,
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
exports.getAllCategories = getAllCategories;
//# sourceMappingURL=categorias.js.map