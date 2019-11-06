"use strict";

const controller = require("../controllers/user");

function initUser(app) {
  app.post("/api/login", controller.login);
}

module.exports = initUser;
