import express, { Request, Response, Express } from "express"
import { getAllComments, getCommentById } from "./commentService"
// import  from "./commentService"



// async function findCommentById(id: number) {
//     const comment = await prisma.comment.findUnique({
//         where: {
//             id: id
//         }
//     })
//     console.log(comment)
    
// }

// async function getAllComments(){
//     try {
//         const comment = await client.comment.findMany()
//         // return comment
//     }catch (err){
//         if (err instanceof Prisma.PrismaClientKnownRequestError){
//             if (err.code === "P2002"){
//                 console.log(err.message)
//                 throw err
//             }else if ( err.code === "P2015"){
//                 console.log(err.message)
//                 throw err
//             }else if ( err.code === "P2019"){
//                 console.log(err.message)
//                 throw err
//             }
//         }
//     }
// }
async function getAllComments2 (req: Request, res : Response) {
    // const max = req.query.max ? +req.query.max : undefined
    const context = await getAllComments()
    
    res.render("comment", context)
}
async function findCommentById(id: number) {
    const comment = await getCommentById(id)
    console.log(comment)
}
export {getAllComments2, findCommentById}