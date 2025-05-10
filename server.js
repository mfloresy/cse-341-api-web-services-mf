const express = require("express")
const app = express()
const port = 5500

app.get("/", (req, res)=> {
    res.send("hello world")
})

app.listen(process.env.port || port)
console.log(`Listening on port ${process.env.port}`)