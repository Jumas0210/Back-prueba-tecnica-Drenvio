import { ObjectId } from "mongoose";

export interface ISpecialPrice{
    userID: number,
    productID: ObjectId
    specialPrice: number,
}