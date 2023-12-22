function errorHandler(err, req, res, next) {
    // return res.json(err)
    console.log(err)
    let status = 500
    let message = "Invalid Server Error"
    if(err.name === "appErr") {
        status = err.status
        message = err.message
    }
    if(err.name === "SequelizeValidationError") {
        status = 400
        message = err.errors[0].message 
    }

    res.status(status).json({ message })
    
}


module.exports = errorHandler