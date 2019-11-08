'use strict'

const ROOT_PATH = process.cwd();
const isProd = process.env.NODE_ENV === 'production'

const https = require('https');
const fs = require('fs');
const dotEnv = require('dotenv');
const path = require('path')

if (!isProd) {
  dotEnv.config({ path: path.resolve(ROOT_PATH, '.env.heroku') })
}

const initApp = require('./src/app')
const app = initApp()

if (isProd) {
  app.listen(process.env.PORT || 8080, () => console.log(`Example app listening!`))
} else {
   https.createServer({
    key: fs.readFileSync(`${ROOT_PATH}/server/key.pem`),
    cert: fs.readFileSync(`${ROOT_PATH}/server/cert.pem`),
    passphrase: process.env.PS_PWS
  }, app).listen(process.env.PORT || 8080);
}
