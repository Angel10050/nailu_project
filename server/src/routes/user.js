"use strict";

const controller = require("../controllers/user");
const { validateToken } = require("../middleware/index")

function initUser(app) {
  app.post("/api/login", controller.login);

  app.get('/admin', validateToken,  (req, res, next) => {
    console.log(req.user)
    res.send('autorizado')
  })
}

module.exports = initUser;
