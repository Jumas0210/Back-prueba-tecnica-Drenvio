import express from "express";
import specialPriceController from "../controllers/specialPriceController";
const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
    specialPriceController.getAll(req, res);
});

router.get("/:userID", (req: express.Request, res: express.Response) => {
    specialPriceController.getAllProductsSpecial(req, res);
});

router.post("/", (req: express.Request, res: express.Response) => {
    specialPriceController.create(req, res);
});

export default router;