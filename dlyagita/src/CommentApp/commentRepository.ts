import { Prisma, PrismaClient } from '@prisma/client'
import { client } from "../client/prismaClient"
const prisma = new PrismaClient()



interface ICommentOk{
    status: "ok",
    user: {
        postId: number,
        name: string,
        description: string,
        img: string | null
    }
}

async function getAllComments(){
    try {
        const comment = await client.comment.findMany()
        return comment
    }catch (err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code === "P2002"){
                console.log(err.message)
                throw err
            }else if ( err.code === "P2015"){
                console.log(err.message)
                throw err
            }else if ( err.code === "P2019"){
                console.log(err.message)
                throw err
            }
        }
    }
}

async function createComment(data: Prisma.CommentCreateInput){
    const comment = await prisma.comment.create({
        // data: {
        //     postId: 3,
        //     name: "comment1",
        //     description: "description  comment",
        //     img: "None",
        //     userId: 1
        // }
        data: data
        
    })
    console.log(comment)
}


// поменять код при создании коментапп! 
async function createComments(){
    const comment = await prisma.comment.createMany({
        data: [{
            postId: 1,
            name: "comment1",
            description: "description  comment",
            img: "None",
            userId: 1
        },
        {
            postId: 2,
            name: "comment2",
            description: "description  comment2",
            img: "None2",
            userId: 2
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

// async function findComment() {
//     const comment = await prisma.comment.findUnique({
//         where: {
//             id: 1
//         }
//     })
//     console.log(comment)
// }

async function findCommentById(id: number) {
    try {
        const comment = await prisma.comment.findUnique({
            where: {
                id: id
            }
        })
        return comment
    }catch (err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code === "P2002"){
                console.log(err.message)
                throw err
            }else if ( err.code === "P2015"){
                console.log(err.message)
                throw err
            }else if ( err.code === "P2019"){
                console.log(err.message)
                throw err
            }
        }
    }
    
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

// async function getAllComments() {

// }


export {createComment, createComments, deleteComment, updateComment, findCommentById, findCommentIncludePost, findPostIncludeCom, getAllComments}

