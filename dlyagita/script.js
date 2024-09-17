var moment = require('moment')
var express = require('express')
const path = require("path")

const app = express()

const HOST = "localhost"
const PORT = 8000

moment().format()

moment.locale('de')
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
    res.sendFile(path.resolve(__dirname, "./templates/index.html"))
}) 

app.listen(PORT, HOST, () => {
    console.log(`site http://${HOST}:${PORT}`)
})