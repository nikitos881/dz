import { Request, Response } from "express"
import { Prisma, PrismaClient } from '@prisma/client'
import { client } from "../client/prismaClient"

const prisma = new PrismaClient()


async function findCommentById(id: number) {
    const comment = await prisma.comment.findUnique({
        where: {
            id: id
        }
    })
    console.log(comment)
    
}

async function getAllComments(){
    try {
        const comment = await client.comment.findMany()
        // return comment
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

export {findCommentById, getAllComments}