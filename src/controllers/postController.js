const productService = require('../services/postService') // импорт файла сервиса

// создание функции
function getAllPosts (req, res) {
    const context = {
        // получение всех постов
        posts:posts.slice(0, req.query.max)
    }
    res.render("posts", context)
}
function getPostById (req, res) {
    const id = req.params.id
    const context = {
        post:posts[id-1],
    }
    res.render("post", context)
}
function createPost(req,res) {
    const post = req.body
    posts.push({id: post.id, name: post.name, author: post.author, description: post.description, time: post.time})
}

// функции которые будут експортироваться
module.exports = {
    getAllPosts: getAllPosts, 
    getPostById: getPostById,
    createPost: createPost 
}