const { access_token } = require('../config/index')

module.exports = (req, res, next) => {
    try {
        const accessToken = req.headers['x-access-token']
        if (!accessToken || accessToken !== access_token) throw new Error()
        return next()

    } catch (err) {
        return res.status(401).json({
            code: 0,
            name: 'Unauthorized',
            message: '`x-access-token` invalid'
        })
    }
}