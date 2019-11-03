'use strict'

const { validateData } = require('../utils')

const customers = [];

function contact (app) {

  app.post('/api/contacto', (req, res, next) => {
    const { body } = req
    console.group('body', body)
    const valid = validateData(
      ['name', 'email', 'phone'],
      body
    )

    if (!valid) {
      return res.status(400).json({ message: 'datos invalidos' })
    }
    
    customers.push(body)

    res.status(201).json({ message: "informacion enviada" })
  })
}

module.exports = contact
