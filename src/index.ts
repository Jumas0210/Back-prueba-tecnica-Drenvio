import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import 'dotenv/config';
import { connectDB } from "./config/dbClient";
import routesProducts from './routes/productsRoutes';
import routesSpecialPrice from "./routes/specialPriceRoutes";
const app = express();

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/products', routesProducts);
app.use('/special', routesSpecialPrice);

try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
}catch(e){
    console.log(e);
}