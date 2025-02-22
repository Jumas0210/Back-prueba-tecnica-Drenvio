import mongoose from "mongoose";
import products from "../schema/products";

class productsModel{

    async getAll(){
        return await products.find();
    }

}

export default new productsModel