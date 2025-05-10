const express = require("express")
const app = express()
const port = 3000

app.use("/", require("./routes/index"))

app.listen(process.env.port || port)
console.log(`Listening on port ${port}`)

