import 'dotenv/config';
import mongoose from 'mongoose';

export const connectDB = async () => {

    try {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/tienda`
        const connection = await mongoose.connect(queryString);

        console.log('Conectado a base de datos')
    } catch (error) {
        console.log(error);
    }

}