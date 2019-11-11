'use strict'

const { connection } = require('../libs/query')

async function contact({ name, email, phone, date }) {
  const user = await connection.query(
    `INSERT INTO customer (name, email, phone, date) VALUES('${name}', '${email}', '${phone}', '${date}')`
  )
  return user
}

module.exports = {
  contact
}
