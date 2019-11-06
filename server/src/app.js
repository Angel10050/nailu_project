'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const initUser = require('./routes/user')
const initContact = require('./routes/contact')

const { handlerError } = require('../src/middleware')

function initApp () {
  const app = express()

  app.use(bodyParser.json())

  initUser(app)
  initContact(app)

  app.use(handlerError)

  return app
}

module.exports = initApp