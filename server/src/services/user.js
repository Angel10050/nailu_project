"use strict";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRepository = require("../repositories/user");

async function login({ username, password }) {
  if (!username || !password) {
    return { failed: true, status: 400, message: "los campos son requeridos" };
  }

  const response = await userRepository.login(username)
  const admin = response.rows.length ? response.rows[0] : null
  console.log('user', admin)
  
  if (!admin) {
    return { failed: true, status: 404, message: "Usuario o contraseña invalidos" }
  }

  try {
    const compare = await bcrypt.compare(password, admin.password);
    if (compare) {
      delete admin.password;
      const token = jwt.sign(
        { username: admin.username },
        "689cba29d8f0ab3d5c9028a307fa061b",
        {}
      );
      return { data: { admin, token } };
    }
    return { failed: true, status: 404, message: "Usuario o contraseña invalidos" }
  } catch (err) {}
}

module.exports = {
  login
};
