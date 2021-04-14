import { Request, Response } from "express";
import { Validator } from "node-input-validator";
import Product from "../models/productos";
import Supplier from "../models/proveedores";
import Category from "../models/categorias";
import { paginador, validateQueryName } from "../helpers";

export const getAllProducts = async (req: Request, res: Response) => {
  // seccion paginador
  let { currentPage, perPage, order, actualPage } = paginador(req);

  try {
    const { count, rows } = await Product.findAndCountAll({
      include: [Supplier, Category],
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
    } else {
      res.status(404).json({
        msg: "Not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  // seccion paginador
  let result: boolean = validateQueryName(req);

  if (result) {
    // PREPARAR EL OBJETO DE BUSQUEDA
    //TODO: arreglar busqueda por producto
    try {
      const result = await Product.findAll({
        include: [
          req.query.CategoryName
            ? {
                model: Category,
                where: { CategoryName: req.query.CategoryName },
              }
            : Category,
          req.query.SupplierName
            ? {
                model: Supplier,
                where: { CompanyName: req.query.SupplierName },
              }
            : Supplier,
        ],
      });

      if (result.length) {
        res.status(200).json({
          items: result,
        });
      } else {
        res.status(404).json({
          msg: "Not Found",
        });
      }
    } catch (error) {
      res.status(500).json({
        msg: "Internal Server Error",
        error,
      });
    }
  } else {
    res.status(417).json({
      msg: "At least one parameter is required",
    });
  }
};

export const getProductByID = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await Product.findByPk(id, {
      include: [Supplier, Category],
    });

    if (result) {
      res.status(200).json({
        items: result,
      });
    } else {
      res.status(404).json({
        msg: "Not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error,
    });
  }
};

export const setProduct = async (req: Request, res: Response) => {
  let { body } = req;

  const v = new Validator(body, {
    CategoryID: "required|integer",
    ProductName: "required|string",
    SupplierID: "required|integer",
    QuantityPerUnit: "required|string",
  });

  const result = await v.check();

  if (!result) {
    res.status(400).json({
      errors: v.errors,
    });
  } else {
    try {
      await Product.create(req.body);

      res.status(200).json({
        msg: "Product Created",
      });
    } catch (error) {
      res.status(500).json({
        msg: "Internal Server Error",
      });
    }
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const ProductID = req.params.id;
  let { body } = req;

  const v = new Validator(body, {
    CategoryID: "required|integer",
    ProductName: "required|string",
    SupplierID: "required|integer",
  });

  const result = await v.check();

  if (!result) {
    res.status(400).json({
      errors: v.errors,
    });
  } else {
    try {
      const resultUpdate = await Product.update(body, {
        where: {
          ProductID,
        },
      });

      if (resultUpdate[0] == 1) {
        res.status(200).json({
          msg: "Product Updated",
        });
      } else {
        res.status(404).json({
          msg: "Product Not Found",
        });
      }
    } catch (error) {
      res.status(500).json({
        msg: "Internal Server Error",
        error,
      });
    }
  }
};
