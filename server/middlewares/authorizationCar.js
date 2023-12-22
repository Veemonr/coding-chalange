const { Car } = require("../models/index")

async function authorzationCar(req, res, next) {
    try {
        const { id } = req.params
        const targetCar = await Car.findByPk(id)
        if(!targetCar) throw({name: "appErr", status: 404, message: "Car Is Not Found"}) 
        next()
    } catch (err) {
        next (err)
    }
}

module.exports = authorzationCar