 
'use strict'

const createConnection = require('../libs')

const connection = createConnection()

async function login(email) {
  const user = await connection.query(`SELECT * FROM users WHERE email = '${email}'`)
  return user
}

async function signup ({ name, lastName, email, password }) {
  const user = await connection.query(
    `INSERT INTO users (name, lastName, email, password) VALUES('${name}', '${lastName || ''}', '${email}', '${password}')`
  )
  return user
}

module.exports = {
  login,
  signup
}