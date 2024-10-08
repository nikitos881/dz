"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts2 = getAllPosts2;
exports.getPostById2 = getPostById2;
exports.createPost2 = createPost2;
// константа с постами
const posts = [
    {
        id: 1,
        name: 'post1',
        author: 'author1',
        description: 'ddd1',
        time: '12:01'
    },
    {
        id: 2,
        name: 'post2',
        author: 'author2',
        description: 'ddd2',
        time: '12:02'
    },
    {
        id: 3,
        name: 'post3',
        author: 'author3',
        description: 'ddd3',
        time: '12:03'
    },
];
// создание всех функций с сохранением контекста
function getAllPosts2() {
    const context = {
        posts: posts.slice(0)
    };
    return context;
}
function getPostById2(id) {
    const context = {
        post: posts[id - 1],
    };
    return context;
}
function createPost2(post) {
    posts.push(post);
    // posts.push({id: post.id, name: post.name, author: post.author, description: post.description, time: post.time})
}
