import express from "express"
import { signup } from "../Controller/AuthController.js";

const AuthRouter = express.Router();

AuthRouter.post("/register",signup)


export default AuthRouter