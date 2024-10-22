// const express = require("express")
import express, {Router} from "express"
// const postControllers = require("../controllers/postController")
import { getAllPosts, getPostById, createPost } from "./postController"


const postRouter: Router = express.Router()
// использывание методов get и post 
postRouter.get("/all", getAllPosts)
postRouter.get("/:id", getPostById)
postRouter.post("/create", createPost)

// константа которая будет експортироваться
// module.exports = router
export { postRouter }