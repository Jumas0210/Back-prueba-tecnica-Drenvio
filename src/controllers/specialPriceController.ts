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
            const { productID } = req.body;
            const idValid = mongoose.Types.ObjectId.isValid(productID);

            if(idValid){

                const data = await specialPriceModel.create(req.body);

                res.status(200).json(createResponse("Precio especial vinculado con éxito", 200, data));
                return;

            }else{
                res.status(400).json(createBadResponse("Error al vincular precio", 200));
                return
            }
        } catch (error) {
            res.status(500).json(createBadResponse("Error obteniendo los productos", 500));
            console.log(error)
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