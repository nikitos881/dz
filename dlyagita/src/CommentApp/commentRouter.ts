import express, {Router} from "express"
import { getAllComments2, findCommentById } from "./commentController"
import {getCommentById} from "./commentService"
import {loginMiddleware} from "../middlewares/loginMiddleware"


const commentRouter: Router = express.Router()

commentRouter.use(loginMiddleware)

commentRouter.get("/:id", findCommentById)
commentRouter.get("/all", getAllComments2)


export {commentRouter}