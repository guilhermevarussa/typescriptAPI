import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { useRoutes } from "./routes";

dotenv.config()

const PORT = process.env.PORT || 8080;

const app = express();

useRoutes(app);

app.get('/', (req: Request, res: Response) => {

    res.json({
        msg: 'DATA BASE ON'
    })

})



app.listen(PORT, () => console.log('Servidor local iniciado na porta 3000' + PORT));