const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 3000
const mainRouter = require("./routers/index")
const errorHandler = require("./middlewares/errorhandler")

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/", mainRouter)
app.use(errorHandler)

app.listen(PORT, (() => console.log("Listen To Port", PORT)))

