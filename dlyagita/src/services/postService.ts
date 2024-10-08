
// константа с постами
const posts: {id: number, name: string, author: string, description: string, time: string}[] = [
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
function getAllPosts2 () {
    const context = {
        posts:posts.slice(0)
    }
    return context
}
function getPostById2 (id: number) {
    const context = {
        post:posts[id-1],
    }
    return context
}
function createPost2(post: {id: number, name: string, author: string, description: string, time: string}) {
    
    posts.push(post)
    // posts.push({id: post.id, name: post.name, author: post.author, description: post.description, time: post.time})
}

// то что будет експортироваться
// module.exports = {
//     getAllPosts: getAllPosts, 
//     getPostById: getPostById,
//     createPost: createPost 
// }
export {getAllPosts2, getPostById2, createPost2}



