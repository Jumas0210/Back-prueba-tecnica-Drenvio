import specialPrice from "../schema/specialPrice";
import products from "../schema/products";
import { ISpecialPrice } from "../utils/interfaces/ISpecialPrice";

class specialPriceModel{

    async getAll(){
        return await specialPrice.find();
    }

    async findOne(ids){
        return await specialPrice.findOne(ids);
    }

    async create(price : ISpecialPrice){
        return await specialPrice.create(price);
    }

    async getAllProductsSpecial(userID: number) {
        const specialProducts = await products.aggregate([
            {
                $lookup: {
                    from: 'preciosEspecialesDelatorre33',
                    let: { productId: "$_id" },
                    pipeline: [
                        { 
                            $match: { 
                                $expr: { 
                                    $and: [
                                        { $eq: ["$productID", "$$productId"] },
                                        { $eq: ["$userID", userID] } // 🔥 Filtrar solo precios del usuario actual
                                    ] 
                                } 
                            } 
                        }
                    ],
                    as: "specialPriceData"
                }
            },
            {
                $unwind: {
                    path: "$specialPriceData",
                    preserveNullAndEmptyArrays: true // 🔥 Esto mantiene los productos sin descuentos
                }
            },
            {
                $group: {
                    _id: "$_id",
                    name: { $first: "$name" },
                    price: { $first: "$price" },
                    category: { $first: "$category" },
                    stock: { $first: "$stock" },
                    description: { $first: "$description" },
                    brand: { $first: "$brand" },
                    sku: { $first: "$sku" },
                    tags: { $first: "$tags" },
                    createdAt: { $first: "$createdAt" },
                    updatedAt: { $first: "$updatedAt" },
                    specialPrice: { $first: { $ifNull: ["$specialPriceData.specialPrice", null] } } // 🔥 Solo muestra el precio del usuario actual
                }
            }
        ]);
    
        return specialProducts;
    }
    
}

export default new specialPriceModel;
