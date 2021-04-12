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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const conect_1 = __importDefault(require("../db/conect"));
const productos_1 = __importDefault(require("../routes/productos"));
const categorias_1 = __importDefault(require("../routes/categorias"));
const proveedores_1 = __importDefault(require("../routes/proveedores"));
class Server {
    constructor() {
        this.apiPaths = {
            productos: "/api/products",
            categorias: "/api/categories",
            proveedores: "/api/suppliers"
        };
        this.app = express_1.default();
        this.port = process.env.SERVER_PORT || "8081";
        this.dbConect();
        this.middlewares();
        this.routes();
    }
    run() {
        this.app.listen(this.port, () => {
            console.log('server up');
        });
    }
    dbConect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conect_1.default.authenticate();
                console.log('Connection has been established successfully');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    routes() {
        this.app.use(this.apiPaths.productos, productos_1.default);
        this.app.use(this.apiPaths.proveedores, proveedores_1.default);
        this.app.use(this.apiPaths.categorias, categorias_1.default);
    }
    middlewares() {
        // CORS 
        this.app.use(cors_1.default());
        // BODY PARSER
        this.app.use(express_1.default.json());
        //CARPETA PUBLICA 
        this.app.use(express_1.default.static('public'));
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map