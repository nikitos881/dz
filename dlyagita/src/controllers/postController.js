"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = getAllPosts;
exports.getPostById = getPostById;
exports.createPost = createPost;
const postService_1 = require("../services/postService");
// создание функции
function getAllPosts(req, res) {
    // const context = {
    //     // получение всех постов
    //     posts:posts.slice(0, req.query.max)
    // }
    const context = (0, postService_1.getAllPosts2)();
    res.render("posts", context);
}
function getPostById(req, res) {
    const id = req.params.id;
    const context = (0, postService_1.getPostById2)(+id);
    res.render("post", context);
}
function createPost(req, res) {
    const post = req.body;
    const context = (0, postService_1.createPost2)(post);
    res.send('123');
}
