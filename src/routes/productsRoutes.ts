import express from "express";
import productsController from "../controllers/productController";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
    productsController.getAll(req, res);
});

export default router;
