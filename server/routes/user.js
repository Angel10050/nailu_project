'use strict'

const controller = require('../controllers/user')

function initUser(app) {
  
  app.post('/auth/login', controller.login)

  app.post('/auth/sing-up', controller.signup)
}

module.exports = initUser