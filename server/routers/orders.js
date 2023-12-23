const express = require("express")
const ordersRouter = express.Router()
const OrderController = require("../controllers/ordersController")
const authorizationOrder = require("../middlewares/authorizationOrder")

ordersRouter.get("/", OrderController.getAll)
ordersRouter.post("/", OrderController.createOrder)
ordersRouter.get("/:id", authorizationOrder, OrderController.getById)
ordersRouter.delete("/:id", authorizationOrder, OrderController.deleteById)
ordersRouter.put("/:id", authorizationOrder, OrderController.editById)

module.exports = ordersRouter