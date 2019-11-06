"use strict";

const { connection } = require("../libs/query");

async function login(username) {
  const user = await connection.query(
    `SELECT * FROM admin WHERE username = '${username}'`
  );
  return user;
}

module.exports = { login };
