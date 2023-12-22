const { Car, Order } = require("../models/index")

class OrderController {
    static async getAll(req, res, next) {
        try {
            const allOrder = await Order.findAll({include: Car})
            res.status(200).json(allOrder)
        } catch(err) {
            next(err)
        }
    }

    static async getById(req, res, next) {
        try {
            const { id } = req.params
            const orderTarget = await Order.findByPk(id, {include: { Car }})
            res.status(200).json(orderTarget)
        } catch(err) {
            next (err)
        }
    }

    static async createOrder(req, res, next) {
        try {
            const { car_id, order_date, pickup_date, dropoff_date, pickup_location, dropoff_location } = req.body
            const newOrder = await Order.create({car_id, order_date, pickup_date, dropoff_date, pickup_location, dropoff_location})
            res.status(201).json(newOrder)
        } catch(err) {

        }
    }

    static async deleteById(req, res, next) {
        try {
            const { id } = req.params
            await Order.destroy({where: {id}})
            res.status(200).json({message: `Order With Id ${id} Has Been Deleted`})
        } catch(err) {
            next(err)
        }
    }

    static async editById(req, res, next) {
        try {
            const { id } = req.params
            const { car_id, order_date, pickup_date, dropoff_date, pickup_location, dropoff_location } = req.body
            await Order.update(
                { car_id, order_date, pickup_date, dropoff_date, pickup_location, dropoff_location },
                { where: { id } }
            )
            res.status(201).json({message: `Order With Id ${id} Has Been Succefuly Edited`})
        } catch(err) {
            next(err)
        }
    }
}

module.exports = OrderController