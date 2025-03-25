import express, {request, response } from "express";
import 'express-async-errors';
import cors from 'cors';
import "dotenv/config";
import {router} from './routes.js'

// Middlewares
const app = express();
app.use(express.json()); // Parsear o retorno dos dados requisitados para JSON
app.use(cors());
app.use(router);

// Middleware de Tratamento de Erros 
app.use((err, req, res, next) =>{
    if(err instanceof Error){
        return res.status(400)
        .json({message: "Error: "+ err.message});
    }
    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3000, ()=>{
    console.log("Servidor iniciado...");
})