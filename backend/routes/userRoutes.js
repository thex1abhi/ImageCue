import { login, registeruser} from "../controllers/user.controller.js"
import express from "express" 

const userRouter=express.Router()

userRouter.post("/register", registeruser) 
userRouter.post("/login", login) 

export default userRouter 
