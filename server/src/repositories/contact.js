'use strict'

const { connection } = require('../libs/query')

async function contact ({ name, email, phone }) {

  const user = await connection.query(
    `INSERT INTO customer (name, email, phone) VALUES('${name}', '${email}', '${phone}')`
  )
  return user
}

module.exports = {
  contact
}