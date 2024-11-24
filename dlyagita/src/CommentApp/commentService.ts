import { getAllComments, findCommentById } from "./commentRepository"



// interface ICommentOk{
//     status: "ok",
//     user: {
//         postId: number,
//         name: string,
//         description: string,
//         img?: string
//     }
// }  


interface IComment{
    name: string,
    description: string,
    img: string | null,
    postId: number,
    userId: number
}

interface ICommentOk{
    status: "ok",
    comment: IComment[]
}

interface ICommentError{
    status:"error",
    message: string
}

interface IadinElement{
    status: "ok",
    comment: IComment
}


async function getAllCommentsService (): Promise<ICommentOk | ICommentError> {
    const context = await getAllComments()
    if(!context){
        return{status: "error", message: "K.O."}
    }
    return{status: "ok", comment: context}
}

async function getCommentById(id:number): Promise<IadinElement | ICommentError> {
    const context = await findCommentById(id)
    if (!context){
        return{status: "error", message: "vsekapec"}
    }
    return {status:"ok", comment: context}
    
}

export {getAllComments, getCommentById}
// const CService = {
//     getAllComments
// }
// export default CService