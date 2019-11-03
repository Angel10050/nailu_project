"use strict";

const bcrypt = require("bcrypt");

const admin = [
  {
    username: "lida11",
    password: "$2b$10$Pk9NFOSPiCvPjSoLR2mFle.OoznZnA8T0XZJA53VTLybzplDFEP4O"
  }
];

function authInit(app) {
  app.post("/api/login", (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Invalid data" });
    }

    const user = admin.find(item => item.username === username);

    if (!user) {
      res.status(404).json({ message: "Usuario o contraseña invalidos" });
    }

    const compare = bcrypt.compare(password, user.password);
    if (compare) {
      delete user.password;
      return res.status(200).json(user);
    }
    res.status(404).json({ message: "Usuario o contraseña invalidos" });
  });
}

module.exports = authInit;
