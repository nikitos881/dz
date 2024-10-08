const express = require("express")
const postControllers = require("../controllers/postController")


const router = express.Router()
// использывание методов get и post 
router.get("/all", postControllers.getAllPosts)
router.get("/:id", postControllers.getPostById)
router.post("/create", postControllers.createPost)

// константа которая будет експортироваться
module.exports = router