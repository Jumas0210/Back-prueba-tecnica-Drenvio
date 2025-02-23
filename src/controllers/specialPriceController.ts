import { Request, Response } from "express";
import specialPriceModel from "../models/specialPriceModel";
import { createBadResponse, createResponse } from "../utils/apiResponse";
import mongoose from "mongoose";

class SpecialPriceController{
     public async getAll(req: Request, res: Response): Promise<void> { 
            try {
                const products = await specialPriceModel.getAll();
    
                if (products.length === 0) {
                    res.status(404).json(createBadResponse("No se encontraron productos", 404));
                    return;
                }
                
                res.status(200).json(createResponse("Productos obtenidos con éxito", 200, products));
            } catch (error) {
                res.status(500).json(createBadResponse("Error obteniendo los productos", 500));
            }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const { productID, userID } = req.body;
            const idValid = mongoose.Types.ObjectId.isValid(productID);
        
            if (!idValid) {
              res.status(400).json(createBadResponse("Producto inválido", 400));
              return;
            }
        
            const existingRecord = await specialPriceModel.findOne({ userID, productID });
            if (existingRecord) {
              res.status(400).json(createBadResponse("El precio especial para este producto ya está vinculado para este usuario", 400));
              return;
            }
        
    
            const data = await specialPriceModel.create(req.body);
            res.status(200).json(createResponse("Precio especial vinculado con éxito", 200, data));
          } catch (error) {
            console.error(error);
            res.status(500).json(createBadResponse("Error al vincular el precio especial", 500));
          }
    }

    public async getAllProductsSpecial(req: Request, res: Response): Promise<void> {
        const userID = parseInt(req.params.userID);

        try {
            const products = await specialPriceModel.getAllProductsSpecial(userID);

            if (products.length === 0) {
                res.status(404).json(createBadResponse("No se encontraron productos", 404));
                return;
            }
            
            res.status(200).json(createResponse("Productos obtenidos con éxito", 200, products));
        } catch (error) {
            res.status(500).json(createBadResponse("Error obteniendo los productos", 500));
            console.log(error)
        }
    }

}

export default new SpecialPriceController();