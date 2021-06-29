const jwt = require('jwt-simple')
const config = require('../config')
const response = require('../utils/responses')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) return response.error(res, 'BAD_REQUEST')
        
        const isValid = jwt.decode(token, config.jwt.secret_key)
        if (!isValid) return response.error(res, 'UNAUTHORIZED')

        next()
    } catch (err) {
        return response.error(res, 'UNAUTHORIZED')
    }
}