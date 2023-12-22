const express = require("express")
const mainRouter = express.Router()
const carsRouter = require("./cars")
const ordersRouter = require("./orders")

mainRouter.use("/cars", carsRouter)
mainRouter.use("/orders", ordersRouter)

module.exports = mainRouter