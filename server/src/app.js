'use strict'

const express = require('express')
const bodyParse = require('body-parser')

const path = require("path");

const distDir = path.join(__dirname, "../", "build");

const authInit = require('./routes/admin')
const contactInit = require('./routes/contact')
const trainingsInit = require('./routes/trainings')

function initApp () {
  const app = express()

  app.use(bodyParse.json())
  app.use(express.static(distDir));

  authInit(app)
  contactInit(app)
  trainingsInit(app)

  return app
}

module.exports = initApp
