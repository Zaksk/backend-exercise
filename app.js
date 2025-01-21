const express = require('express')
const app = express()

const logger = require("./logger")
app.use(logger) // if it was logger() it would tell the server to run it as soon as it starts and the fact that we are not using an endpoint it means to run it on every endpoint

app.use(express.json())
const fruitsRouter = require("./routes/fruits")


app.get('/', (req, res) => {
  res.send('Hello Fruity')
})

app.use("/fruits", fruitsRouter)

module.exports = app



