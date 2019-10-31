 
'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const initUser = require('./routes/user')

const { validateToken, handlerError } = require('../src/middleware')

function initApp () {
  const app = express()

  app.use(bodyParser.json())

  initUser(app)

  app.use(handlerError)

  return app
}

module.exports = initApp