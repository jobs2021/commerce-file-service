const { fileMiddleware, authMiddleware } = require('./middlewares')
const { Storage } = require('@google-cloud/storage')
const { google_credentials, port } = require('./config/index')
const { getStorage, getPublicUrl } = require('./utils/file')
const express = require('express')
const response = require('./utils/responses')

const app = express()

const uploadFile = async (req, res) => {
  try {
    //
    const storage = new Storage({credentials: google_credentials})
    const file = getStorage(storage)

    const stream = file.createWriteStream({
      resumable: false,
      metadata: {
        contentType: req.file.mimetype
      }
    })

    stream.on('error', (err) => { throw new Error(err) })

    stream.on('finish', () => {
      console.log(file.metadata)
      return response.success(res, { url: getPublicUrl(file.metadata.name) })
    })

    // stream file to the bucket
    await stream.end(req.file.buffer)
  
  } catch (err) {
    console.error(err)
    return response.error(res, err)
  }
}

app.post('/api/files', authMiddleware, fileMiddleware, uploadFile)
app.listen(port)
