"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// var moment = require('moment')
const moment_1 = __importDefault(require("moment"));
// var express = require('express')
const express_1 = __importDefault(require("express"));
// const path = require("path")
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// const postRouter = require("./routers/postRouter")
const postRouter_1 = require("./routers/postRouter");
const HOST = "localhost";
const PORT = 8000;
app.use(express_1.default.json());
(0, moment_1.default)().format();
moment_1.default.locale('de');
app.set("view engine", "ejs");
app.set("views", path_1.default.resolve(__dirname, "./templates"));
function getDate() {
    console.log((0, moment_1.default)().format('YYYY:DD:MM hh:mm:ss'));
}
function runFunc(func) {
    func();
}
app.use("/static/", express_1.default.static(path_1.default.resolve(__dirname, "./static")));
app.use("/post/", postRouter_1.postRouter);
// app.get("/date", (req, res) => {
//     console.log("work")
//     res.send(moment().format('YYYY:DD:MM hh:mm:ss'))
// })
app.get('/', (req, res) => {
    res.render("index");
});
// app.get("/posts", (req, res) => {
//     const context = {
//         posts:posts.slice(0, req.query.max)
//     }
//     res.render("posts", context)
// })
// app.get("/post/:id", (req, res) => {
//     const id = req.params.id
//     const context = {
//         post:posts[id-1],
//     }
//     res.render("post", context)
// })
// app.post("/post/create", (req,res)=>{
//     const post = req.body
//     posts.push({id: post.id, name: post.name, author: post.author, description: post.description, time: post.time})
// })
app.listen(PORT, HOST, () => {
    console.log(`site http://${HOST}:${PORT}`);
});
