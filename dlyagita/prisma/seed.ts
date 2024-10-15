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
    const post = await prisma.post.create({
        data: {
            name: 'post9',
            author: 'author9',
            time: '13:01'
        }
    })
    await prisma.post.create({
        data: {
            name: 'post10',
            author: 'author10',
            time: '13:02'
        }})
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
    const post = await prisma.post.findUnique({
        where: {
            id: 1
        }
    })
    await prisma.post.findUnique({
        where: {
            id: 2}
        })
    console.log(post)
}

async function main() {
    await createPost()
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