import { Request, Response } from "express";


export const getAllProducts = (req: Request, res: Response) => {

    const search = req.query


    res.json({
        msg: "funciona getAllProducts", 
        request: search
    })

}

export const getProduct = (req: Request, res: Response) => {

    const  search  = req.query


    res.json({
        msg: "funciona getProduct", 
        request: search
    })

}

export const getProductByID = (req: Request, res: Response) => {

    const { id } = req.params


    res.json({
        msg: "funciona getProductByID ", 
        request: id
    })

}

export const setProduct = (req: Request, res: Response) => {

    const body = req.body


    res.json({
        msg: "funciona setProduct", 
        request: body
    })

}

export const updateProduct = (req: Request, res: Response) => {

    const { id } = req.params
    const body = req.body


    res.json({
        msg: "funciona", 
        request: `${body} ${id}`
    })

}