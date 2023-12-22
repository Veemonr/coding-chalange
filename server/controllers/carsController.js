const { Car } = require("../models/index")
const { Op } = require("sequelize")

class CarsController {
        static async getAll(req, res, next) {
            try {
                let option = {}
                const { filter, dayRateSort, monthRateSort } = req.query
                if(filter) {
                    option.where = {car_name : {[Op.iLike]: `%${filter}%`}}
                }   
                if(dayRateSort) {
                    if(dayRateSort !== "ASC" && dayRateSort !== "DESC") {
                        throw({name: "appErr", status: 400, message: "Sort Must Be ASC or DESC"})
                    } 
                    option.order = [["day_rate", dayRateSort]]
                }
                if(monthRateSort) {
                    if(monthRateSort !== "ASC" && monthRateSort !== "DESC") {
                        throw({name: "appErr", status: 400, message: "Sort Must Be ASC or DESC"})
                    } 
                    option.order = [["month_rate", monthRateSort]]
                }
                console.log(option)
                const allCar = await Car.findAll(option)
                res.status(200).json(allCar)
            } catch(err) {
                next(err)
            }
        }

        static async getById(req, res, next) {
            try {
                const { id } = req.params
                const targetCar = await Car.findByPk(id)
                if(!targetCar) throw({name: "appErr", status: 404, message: "Car Is Not Found"}) 
                res.status(200).json(targetCar)
            } catch(err) {
                next(err)
            }
        }

        static async createCar(req, res, next) {
            try {
                const { car_name, day_rate, month_rate, image } = req.body
                const newCar = await Car.create({car_name, day_rate, month_rate, image})
                res.status(201).json(newCar)
            } catch(err) {
                next(err)
            }
        }

        static async deleteById(req, res, next) {
            try {
                const { id } = req.params
                await Car.destroy({where: {id}})
                res.status(200).json({message: `Car With Id ${id} Has Been Sucesfully Deleted`})
            } catch(err) {
                next(err)
            }
        }
        
        static async editById(req, res, next) {
            try {
                const { id } = req.params
                const { car_name, day_rate, month_rate, image } = req.body
                await Car.update({car_name, day_rate, month_rate, image}, { where: { id } })
                res.status(201).json({message: `Car With Id ${id} Has Been Succefuly Edited`})
            } catch(err) {
                next(err)
            }
        }
}

module.exports = CarsController