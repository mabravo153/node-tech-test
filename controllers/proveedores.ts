import { Request, Response } from "express";
import Product from "../models/productos";
import Supplier from "../models/proveedores";
import Category from "../models/categorias";

export const getSupplierById = async (req: Request, res: Response) => {
  let SupplierID = req.params.id;

  try {
    const resultSupplier = await Supplier.findOne({
      where: {
        SupplierID,
      },
    });

    if (resultSupplier) {
      res.status(200).json({
        resultSupplier,
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

export const getSupplierProduct = async (req: Request, res: Response) => {
  let SupplierID = req.params.id;

  try {
    const resultSupplier = await Supplier.findOne({
      where: {
        SupplierID,
      },
      include: [Product],
    });

    if (resultSupplier) {
      res.status(200).json({
        resultSupplier,
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

export const removeSupplier = async (req: Request, res: Response) => {
  let SupplierID = req.params.id;

  try {
    const resultSupplier = await Supplier.destroy({
      where: {
        SupplierID: SupplierID,
      },
    });

    if (resultSupplier == 1) {
      res.status(200).json({
        msg: "Supplier Deleted",
      });
    } else {
      res.status(404).json({
        msg: "Supplier Not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error,
    });
  }
};
