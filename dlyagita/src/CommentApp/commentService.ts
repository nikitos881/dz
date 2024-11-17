import { getAllComments } from "./commentController"



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



async function getAllCommentsService (max?: number) {
    const context = {
        // posts:posts.slice(0)
        post: await getAllComments()
    }
    return context
}


