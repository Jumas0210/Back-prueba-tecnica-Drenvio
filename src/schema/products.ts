import mongoose from "mongoose";
import { Iproducts } from "../utils/interfaces/Iproducts";

const productsSchema = new mongoose.Schema<Iproducts>(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        description: {
            type: String
        },
        brand: {
            type: String,
            required: true
        },
        sku: {
            type: String,
            required: true
        },
        tags: [{
            type:String
        }]
    }, {timestamps:true}
);

export default mongoose.model('productos', productsSchema, 'productos')