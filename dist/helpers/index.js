"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQueryName = exports.paginador = void 0;
const paginador = (req) => {
    let order = "DESC";
    let perPage = Number(req.query.perPage)
        ? Number(req.query.perPage)
        : 5;
    let currentPage;
    let actualPage = !Number(req.query.currentPage) || Number(req.query.currentPage) == 1
        ? 1
        : Number(req.query.currentPage);
    if (!Number(req.query.currentPage) || Number(req.query.currentPage) == 1) {
        currentPage = 0;
    }
    else {
        currentPage = Number(req.query.currentPage) * perPage - perPage + 1;
    }
    return {
        order,
        perPage,
        actualPage,
        currentPage,
    };
};
exports.paginador = paginador;
const validateQueryName = (req) => {
    let search = [];
    if (req.query.ProductName) {
        search.push("productName");
    }
    if (req.query.CategoryName) {
        search.push("categoryName");
    }
    if (req.query.SupplierName) {
        search.push("supplierName");
    }
    if (search.length) {
        return true;
    }
    else {
        return false;
    }
};
exports.validateQueryName = validateQueryName;
//# sourceMappingURL=index.js.map