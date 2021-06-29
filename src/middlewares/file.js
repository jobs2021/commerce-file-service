const multer = require('multer-js')
const config = require('../config')
const response = require('../utils/responses')

const uploader = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: config.file.size_limit * 1024 * 1024  // limit 1MB
    }
}).single('file')

module.exports = (req, res, next) => {
    uploader(req, res, function (err) {
      if (err) return response.error(res, err.code)
      return next()
    })
}
