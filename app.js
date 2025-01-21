const express = require('express')
const cors = require('cors')
const app = express()


const logger = require("./logger")


app.use(cors())
app.use(express.json())
app.use(logger) // if it was logger() it would tell the server to run it as soon as it starts and the fact that we are not using an endpoint it means to run it on every endpoint

const fruitsRouter = require("./routes/fruits")


app.get('/', (req, res) => {
  res.send('Hello Fruity')
})

app.use("/fruits", fruitsRouter)

module.exports = app



