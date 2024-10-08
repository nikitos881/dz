"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
// const express = require("express")
const express_1 = __importDefault(require("express"));
// const postControllers = require("../controllers/postController")
const postController_1 = require("../controllers/postController");
const postRouter = express_1.default.Router();
exports.postRouter = postRouter;
// использывание методов get и post 
postRouter.get("/all", postController_1.getAllPosts);
postRouter.get("/:id", postController_1.getPostById);
postRouter.post("/create", postController_1.createPost);
