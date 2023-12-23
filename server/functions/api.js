const express = require("express")
const serverless = require("serverless-http")
const app = express()
const cors = require("cors")
const PORT = 8080
const mainRouter = require("../routers/index")
const errorHandler = require("../middlewares/errorhandler")

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/", mainRouter)
app.use(errorHandler)

app.use("./netlify/functions/api", router)
module.exports.handler = serverless(app)
