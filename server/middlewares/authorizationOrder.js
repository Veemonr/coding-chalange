const { Order } = require("../models/index")

async function authorizationOrder(req, res, next) {
    try {
        const { id } = req.params
        const targetOrder = await Order.findByPk(id)
        if(!targetOrder) throw({name: "appErr", status: 404, message: "Order Is Not Found"}) 
        next()
    } catch (err) {
        next (err)
    }
}

module.exports = authorizationOrder