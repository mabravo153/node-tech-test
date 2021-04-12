import express from "express";
import cors from "cors";
import conectDB from "../db/conect";
import routesProduct from "../routes/productos";
import routesCategory from "../routes/categorias";
import routesSupplier from "../routes/proveedores";


class Server {

    private app: express.Application;
    private port: string;
    private apiPaths = {
        productos: "/api/products",
        categorias: "/api/categories",
        proveedores: "/api/suppliers"
    }

    constructor() {
        this.app = express()
        this.port = process.env.SERVER_PORT || "8081";

        this.dbConect()
        this.middlewares()
        this.routes()
    
    }

    run(){
        this.app.listen(this.port, () => {
            console.log('server up');
        })
    }

    async dbConect(){

        try {
            await conectDB.authenticate()
            console.log('Connection has been established successfully');
        } catch (error) {
            throw new Error(error);
        }
    }

    routes(){
        this.app.use(this.apiPaths.productos, routesProduct);
        this.app.use(this.apiPaths.proveedores, routesSupplier);
        this.app.use(this.apiPaths.categorias, routesCategory);
    }

    middlewares(){
        // CORS 
        this.app.use(cors())

        // BODY PARSER
        this.app.use(express.json())

        //CARPETA PUBLICA 
        this.app.use(express.static('public'))
    }



}


export default Server;