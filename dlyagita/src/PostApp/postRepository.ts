import { client } from "../client/prismaClient"
import { Prisma } from "@prisma/client"
import { PrismaClient } from '@prisma/client';

async function createPost(){
    const post = await client.post.create({
        data: {
            name: 'post9',
            author: 'author9',
            time: '13:01'
        }
    })
    console.log(post)
}

async function createPosts(){
    const post = await client.post.createMany({
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
    const post = await client.post.delete({
        where: {
            id: 1
        }
    })
    console.log(post)
}

async function updatePost() {
    const post = await client.post.update({
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
    const post = await client.post.findUnique({
        where: {
            id: 1
        }
    })
    console.log(post)
}

async function getAllPosts(max?: number){
    try {
        const post = await client.post.findMany()
        return post
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


const postRepository = {
    createPost,
    createPosts,
    findPost,
    getAllPosts,
    updatePost,
    deletePost
}

export default postRepository

