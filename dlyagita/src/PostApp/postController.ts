import { getAllPosts2, getPostById2, createPost2 } from './postService'
// const postService = require('../services/postService') // импорт файла сервиса
import { Request, Response } from "express"

// создание функции
async function getAllPosts (req: Request, res: Response) {
    // const context = {
    //     // получение всех постов
    //     posts:posts.slice(0, req.query.max)
    // }
    const context = await getAllPosts2(req.query.max ? +req.query.max : undefined)
    // const context = getAllPosts2()
    res.render("posts", context)
}
function getPostById (req: Request, res: Response) {
    const id = req.params.id
    const context = getPostById2(+id)
    res.render("post", context)
}
function createPost(req: Request, res: Response) {
    const post = req.body
    const context = createPost2(post)
    res.send('123')
}

// функции которые будут експортироваться
// module.exports = {
//     getAllPosts: getAllPosts, 
//     getPostById: getPostById,
//     createPost: createPost 
// }
export {getAllPosts, getPostById, createPost}