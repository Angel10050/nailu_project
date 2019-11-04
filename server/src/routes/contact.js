'use strict'

const { validateData, validateEmail, validatePhone } = require('../utils')

const customers = [];

function contact (app) {

  app.post('/api/contacto', (req, res, next) => {
    const { body } = req
    const valid = validateData(
      ['name', 'email', 'phone'],
      body
    )

    if (!valid || !validateEmail(req.body.email) || !validatePhone(req.body.phone)) {
      return res.status(400).json({ message: 'datos invalidos' })
    }
    
    customers.push(body)

    res.status(201).json({ message: "informacion enviada" })
  })
}

module.exports = contact
