
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
]


// создание всех функций с сохранением контекста
function getAllPosts (max) {
    const context = {
        posts:posts.slice(0, max)
    }
    return context
}
function getPostById (id) {
    const context = {
        post:posts[id-1],
    }
    return context
}
function createPost(post) {
    const post = req.body
    posts.push(post)
}

// то что будет експортироваться
module.exports = {
    getAllPosts: getAllPosts, 
    getPostById: getPostById,
    createPost: createPost 
}



