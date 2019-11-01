'use strict'

const { Pool } = require('pg')

let connection

function  createConnection () {
  if (!connection) {
    connection = new Pool({
      user: 'ivan',
      host: 'localhost',
      database: 'codeyourfuture',
      password: '123456',
      port: 54320
    });
    console.log('postgres')
  }

  return connection
}

module.exports = createConnection