import { Request } from "express";

export const paginador = (req: Request) => {
  let order = "DESC";
  let perPage: number = Number(req.query.perPage)
    ? Number(req.query.perPage)
    : 5;
  let currentPage: number;
  let actualPage: number =
    !Number(req.query.currentPage) || Number(req.query.currentPage) == 1
      ? 1
      : Number(req.query.currentPage);

  if (!Number(req.query.currentPage) || Number(req.query.currentPage) == 1) {
    currentPage = 0;
  } else {
    currentPage = Number(req.query.currentPage) * perPage - perPage + 1;
  }

  return {
    order,
    perPage,
    actualPage,
    currentPage,
  };
};

export const validateQueryName = (req: Request) => {
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
  } else {
    return false;
  }
};
