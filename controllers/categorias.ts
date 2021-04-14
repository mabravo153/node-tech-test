import { Request, Response } from "express";
import { paginador } from "../helpers";
import Product from "../models/productos";
import Supplier from "../models/proveedores";
import Category from "../models/categorias";

export const getAllCategories = async (req: Request, res: Response) => {
  // seccion paginador

  let CategoryID = req.params.id;

  let { currentPage, perPage, order, actualPage } = paginador(req);

  try {
    const resultCategory = await Category.findOne({
      where: {
        CategoryID,
      },
      include: [Product],
    });

    if (resultCategory) {
      res.status(200).json({
        resultCategory,
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
