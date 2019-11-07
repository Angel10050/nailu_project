'use strict'

const controller = require('../controllers/contact')
const { getCustomers } = require('../libs/query')

function initContact(app) {
  app.post('/api/customer', controller.contact)
  app.get('/api/customer', (req, res) => {
    getCustomers().then(data => {
      res.json({
        data
      })
    })
    .catch(err => {
      return res.status(400).json({ message: 'el usuario no existe' })
    })
  })

  return app
}

module.exports = initContact
