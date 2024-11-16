import express ,{Router} from "express" 
// import userController from "./userController"
import {loginUser, authRegisterUser, registerUser, authUser} from "./userController"

const userRouter:Router = Router()

userRouter.get("/login", loginUser)
userRouter.get("/registration", registerUser)
userRouter.post("/login", authUser)
userRouter.post("/registration", authRegisterUser)

export default userRouter