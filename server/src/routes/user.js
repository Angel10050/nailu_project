'use strict';

const controller = require('../controllers/user');
const { validateToken } = require('../middleware/index')

function initUser(app) {
  app.post('/api/login', controller.login)
  app.post('/api/autorizacion', validateToken, (req, res, next) => {
    return res.status(200).json({ ok: true, message: 'ok'});
  })
}

module.exports = initUser;
