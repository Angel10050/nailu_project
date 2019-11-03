'use strict'

const { validateData } = require('../utils')

const customers = [];

function contact (app) {

  app.post('/api/contacto', async (req, res, next) => {
    const { body } = req
    console.group('body', body)
    const valid = validateData(
      ['name', 'email', 'phone'],
      body
    )

    if (!valid) {
      return res.status(400).json({ message: 'Invalid data' })
    }

    try {
      customers.push(body)
    } catch (err) {
      return res.status(500).send('Internal server error')
    }
    console.log(customers)
    res.status(201).json({ message: "Ok" })
  })
}

module.exports = contact
