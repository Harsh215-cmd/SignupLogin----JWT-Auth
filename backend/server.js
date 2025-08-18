import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import Database from "./Utils/DataBase.js";
import AuthRouter from "./Routes/Auth.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

Database()

app.use("/auth",AuthRouter)


app.get("/",(req,res)=>{
    res.send("Server Started !!")
})

app.listen(port,()=>{
    console.log("Sertver started On port",port);
})