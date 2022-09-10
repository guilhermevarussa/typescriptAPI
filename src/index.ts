import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT || 3000;

const app = express();


app.get('/', (req: Request, res: Response) => {

    res.json({
        msg: 'OK'
    })

})



app.listen(PORT, () => console.log('Servidor local iniciado na porta 3000' + PORT));