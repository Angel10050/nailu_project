const ROOT_PATH = process.cwd();
const isProd = process.env.NODE_ENV === 'production'

const express = require('express')
const path = require('path')
const https = require('https');
const fs = require('fs');
const dotEnv = require('dotenv');

if (!isProd) {
  dotEnv.config()
  dotEnv.config({ path: path.resolve(ROOT_PATH, '.env.heroku') })
}

const { getCustomers } = require('./query')

const distDir = path.join(__dirname, '../', 'build')
const app = express()

app.use(express.static(distDir));

app.get('/api/customer', (req, res) => {
  getCustomers().then(data => {
    res.json({
      data
    })
  }).catch(console.error)
})

if (isProd) {
  app.listen(process.env.PORT || 8080, () => console.log(`Example app listening!`))
} else {
  https.createServer({
    key: fs.readFileSync(`${ROOT_PATH}/server/key.pem`),
    cert: fs.readFileSync(`${ROOT_PATH}/server/cert.pem`),
    passphrase: process.env.PS_PWS
  }, app).listen(process.env.PORT || 8080);
}
