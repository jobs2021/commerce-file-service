const { bucket } = require('../config/index')
const randToken = require('rand-token')
const moment = require('moment')

const getFilename = () => {
  let date = moment()
  date = date.format('YYYY/MM/DD')
  return `images/${date}/${randToken.generate(32)}`
}

const getPublicUrl = (filename) => {
  return `https://storage.googleapis.com/${bucket}/${filename}`
}

const getStorage = (storage) => {
  return storage.bucket(bucket).file(getFilename())
}

module.exports = { getFilename, getPublicUrl, getStorage }
