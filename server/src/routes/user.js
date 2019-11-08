'use strict';

const controller = require('../controllers/user');
const { validateToken } = require('../middleware/index')

function initUser(app) {
  app.post('/api/login', controller.login);

  app.get('/api/authorization', validateToken)
}

module.exports = initUser;
