import specialPrice from "../schema/specialPrice";
import products from "../schema/products";
import { ISpecialPrice } from "../utils/interfaces/ISpecialPrice";

class specialPriceModel{

    async getAll(){
        return await specialPrice.find();
    }

    async create(price : ISpecialPrice){
        return await specialPrice.create(price);
    }

    async getAllProductsSpecial( userID : number ){

        const specialProducts = await products.aggregate([
            {
                $lookup: {
                    from : 'preciosEspecialesDelatorre33',
                    localField : '_id',
                    foreignField : 'productID',
                    as : 'specialPriceData'
                }
            },
            {
                $unwind: {
                    path: '$specialPriceData',
                    preserveNullAndEmptyArrays: true,
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    price: 1,
                    specialPrice: {
                      $cond: {
                        if: { $eq: ['$specialPriceData.userID', userID] },
                        then: '$specialPriceData.specialPrice',
                        else: null
                      }
                    },
                    category: 1,
                    stock: 1,
                    description: 1,
                    brand: 1,
                    sku: 1,
                    tags: 1,
                    createdAt: 1,
                    updatedAt: 1 
                }
            }
        ])

        return specialProducts;

    }
}

export default new specialPriceModel;
