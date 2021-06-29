require('dotenv/config')

const config = {
  port: process.env.PORT || 3001,
  env: process.env.NODE_ENV || 'development',
  
  bucket: process.env.APP_BUCKET,

  // file
  file: {
    size_limit: 1
  },

  // Google Credentials
  google_credentials: process.env.APP_GOOGLE_CREDENTIALS
}

// parse google credentials
const googleCredentials = JSON.parse(config.google_credentials)
googleCredentials.private_key = googleCredentials.private_key.replace(/\\n/g, '\n')
config.google_credentials = googleCredentials

module.exports = config