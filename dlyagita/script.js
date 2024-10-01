var moment = require('moment')
var express = require('express')
const path = require("path")

const app = express()

const HOST = "localhost"
const PORT = 8000
app.use(express.json())
moment().format()

const posts = [
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


moment.locale('de')
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./templates"))
function getDate(){
    console.log(moment().format('YYYY:DD:MM hh:mm:ss'))
}

function runFunc(func){
    func()
}


app.use("/static/", express.static(path.resolve(__dirname, "./static")))

app.get("/date", (req, res) => {
    console.log("work")
    res.send(moment().format('YYYY:DD:MM hh:mm:ss'))
})

app.get('/', (req, res) => {
    res.render("index")
}) 

app.get("/posts", (req, res) => {
    const context = {
        posts:posts.slice(0, req.query.max)
    }
    res.render("posts", context)
})
app.get("/post/:id", (req, res) => {
    const id = req.params.id
    const context = {
        post:posts[id-1],
    }
    res.render("post", context)
})
app.post("/post/create", (req,res)=>{
    const post = req.body
    posts.push({id: post.id, name: post.name, author: post.author, description: post.description, time: post.time})
})

app.listen(PORT, HOST, () => {
    console.log(`site http://${HOST}:${PORT}`)
})