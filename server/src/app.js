'use strict'

const express = require('express')
const bodyParse = require('body-parser')
const path = require('path')

const distDir = path.join(__dirname, "../", "build");

const authInit = require('./routes/admin')
const contactInit = require('./routes/contact')
const trainingsInit = require('./routes/trainings')

const { getCustomers } = require('../query')

function initApp() {
  const app = express()

  app.use(bodyParse.json())
  app.use(express.static(distDir));

  authInit(app)
  contactInit(app)
  trainingsInit(app)

  app.get('/api/customer', (req, res) => {
    // esto es un ejemplo
    getCustomers().then(data => {
      res.json({
        data
      })
    }).catch(console.error)
  })

  return app
}

module.exports = initApp
