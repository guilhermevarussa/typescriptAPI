import { Request, Response } from "express"
import { Product, productModel } from "../models/products";
import { badRequest, internalServerError } from "../services/util";

const insertProduct = (req: Request, res: Response) => {

    {
        const product = req.body.product;

        if (!product)
            return badRequest(res, "Produto inválido");

        if (!product.name)
            return badRequest(res, "Informe o nome do produto");

        if (parseFloat(product.price) > 0)
            return badRequest(res, "Informe o preço")

    }


    const product = req.body.product as Product;
    productModel.insertProduct(product)
        .then(id => {
            res.json({
                id
            })
        })
        .catch(err => internalServerError(res, err));

}

export const productController = {

    insertProduct

}