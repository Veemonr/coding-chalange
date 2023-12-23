const express = require("express")
const carsRouter = express.Router()
const CarsController = require("../controllers/CarsController")
const authorzationCar = require("../middlewares/authorizationCar")

carsRouter.get("/", CarsController.getAll)
carsRouter.post("/", CarsController.createCar)
carsRouter.get("/:id", authorzationCar, CarsController.getById)
carsRouter.delete("/:id", authorzationCar, CarsController.deleteById)
carsRouter.put("/:id", authorzationCar, CarsController.editById)

module.exports = carsRouter