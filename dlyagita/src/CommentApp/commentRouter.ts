import express, {Router} from "express"
import { findCommentById, getAllComments } from "./commentController"


const commentRouter: Router = express.Router()

commentRouter.get("/comment/id", findCommentById)
commentRouter.get("/comment/all", getAllComments)


export {commentRouter}