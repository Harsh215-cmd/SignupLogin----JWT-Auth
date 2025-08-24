import express from "express"
import { Login, signup } from "../Controller/AuthController.js";

const AuthRouter = express.Router();

AuthRouter.post("/registration",signup)
AuthRouter.post("/login",Login)


export default AuthRouter