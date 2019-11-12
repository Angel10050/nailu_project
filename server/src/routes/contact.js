'use strict'

const controller = require('../controllers/contact')
const { getCustomers } = require('../libs/query')

function initContact(app) {
  app.post('/api/customer', controller.contact)
  app.get('/api/customer', (req, res) => {
    getCustomers()
      .then(data => {
        res.json({
          data
        })
      })
      .catch(err => {
        return res.status(404).send({ message: 'Error al obtener los datos'  })
      })
  })

  return app
}

module.exports = initContact
