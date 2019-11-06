'use strict'

const controller = require('../controllers/contact')
const { getCustomers } = require('../libs/query')

function initContact(app) {
  app.post('/api/customer', controller.contact)
  app.get('/api/customer', (req, res) => {
    // esto es un ejemplo
    getCustomers().then(data => {
      res.json({
        data
      })
    }).catch(console.error)
  })

  return app
}

module.exports = initContact
