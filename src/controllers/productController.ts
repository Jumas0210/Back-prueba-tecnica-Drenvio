import { Request, Response } from "express";
import productsModel from "../models/productModel";
import { createBadResponse, createResponse } from "../utils/apiResponse";

class ProductsController {
    public async getAll(req: Request, res: Response): Promise<void> { 
        try {
            const products = await productsModel.getAll();

            if (products.length === 0) {
                res.status(404).json(createBadResponse("No se encontraron productos", 404));
                return;
            }
            
            res.status(200).json(createResponse("Productos obtenidos con éxito", 200, products));
        } catch (error) {
            res.status(500).json(createBadResponse("Error obteniendo los productos", 500));
        }
    }
}

export default new ProductsController();
