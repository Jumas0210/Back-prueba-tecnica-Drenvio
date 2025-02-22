import mongoose from "mongoose";
import { ISpecialPrice } from "../utils/interfaces/ISpecialPrice";

const specialPriceShema = new mongoose.Schema<ISpecialPrice>(
    {
        userID: {
            type : Number,
            required : true
        },
        productID: {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'productos',
            required : true
        },
        specialPrice: {
            type : Number,
            required : true
        }
    }, {timestamps:true}
);

export default mongoose.model('preciosEspecialesDelatorre33', specialPriceShema, 'preciosEspecialesDelatorre33')