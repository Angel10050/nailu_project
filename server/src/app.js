'use strict'

const express = require('express')
const bodyParse = require('body-parser')
const path = require('path')
const cors = require('cors')

const distDir = path.join(__dirname, "../../", "build");

const authInit = require('./routes/user')
const contactInit = require('./routes/contact')
const trainingInit = require('./routes/trainings')

function initApp() {
  const app = express()

  app.use(cors())
  app.use(bodyParse.json())
  app.use(express.static(distDir));

  authInit(app)
  contactInit(app)
  trainingInit(app)

  app.use('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../build/index.html'))
  })

  return app
}

module.exports = initApp