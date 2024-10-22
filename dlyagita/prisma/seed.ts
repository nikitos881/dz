import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()






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
    // await findPost()
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