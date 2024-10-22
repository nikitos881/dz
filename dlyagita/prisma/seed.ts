import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()


async function createPost(){
    const post = await prisma.post.create({
        data: {
            name: 'post9',
            author: 'author9',
            time: '13:01'
        }
    })
    console.log(post)
}

async function createPosts(){
    const post = await prisma.post.createMany({
        data: [{
            name: 'post9',
            author: 'author9',
            time: '13:01'
        },
        {
            name: 'post10',
            author: 'author10',
            time: '13:02'
        }]})
    console.log(post)
}

async function deletePost() {
    const post = await prisma.post.delete({
        where: {
            id: 1
        }
    })
    console.log(post)
}

async function updatePost() {
    const post = await prisma.post.update({
        where: {
            id: 1
        },
        data: {
            name: 'obnovlenii post'
        }
    })
    console.log(post)

}

async function findPost() {
    const post = await prisma.post.findUnique({
        where: {
            id: 1
        }
    })
    console.log(post)
}

async function findPosts() {
    const post = await prisma.post.findMany({
        where: {
            AND: [
                {
                    id: 1
                },
                {
                    id: 2
                }
            ]
        }
    })  
    console.log(post)
}



async function createComment(){
    const comment = await prisma.comment.create({
        data: {
            postId: 3,
            name: "comment1",
            description: "description  comment",
            img: "None"
        }
    })
    console.log(comment)
}

async function createComments(){
    const comment = await prisma.comment.createMany({
        data: [{
            postId: 1,
            name: "comment1",
            description: "description  comment",
            img: "None"
        },
        {
            postId: 2,
            name: "comment2",
            description: "description  comment2",
            img: "None2"
        }]})
        console.log(comment)
}

async function deleteComment() {
    const comment = await prisma.comment.delete({
        where: {
            id: 1
        }
    })
    console.log(comment)
}

async function updateComment() {
    const comment = await prisma.comment.update({
        where: {
            id: 1
        },
        data: {
            name: 'obnovlenii post'
        }
    })
    console.log(comment)

}

async function findComment() {
    const comment = await prisma.comment.findUnique({
        where: {
            id: 1
        }
    })
    console.log(comment)
}

async function findCommentIncludePost() {
    const comment = await prisma.comment.findUnique({
        where: {
            id: 1
        },
        include: {
            post: true
        }
    })
    console.log(comment)
}

async function findPostIncludeCom() {
    const post_comment = await prisma.post.findUnique({
        where: {
            id: 1
        },
        include: {
            comments: true
        }
    })  
    console.log(post_comment)
}



async function main() {
    // await createPost()
    // await createPosts()
    await findPost()
    // await findPosts()
    // await updatePost()
    // await deletePost()
}

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})