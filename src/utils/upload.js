const { Storage } = require('@google-cloud/storage')
const { google_credentials, bucket } = require('../config/index')

const uploadFile = async (filename, destination) => {
  const storage = new Storage({credentials: google_credentials})

  await storage.bucket(bucket).upload(filename, {
    destination,
    gzip: true,
    metadata: {
      cacheControl: 'public, max-age=31536000'
    }
  })
  console.log(`${filename} uploaded to ${bucket}.`)
}

module.exports = { uploadFile }
