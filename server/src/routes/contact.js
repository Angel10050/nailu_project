'use strict'

const controller = require('../controllers/contact')
const { getCustomers } = require('../libs/query')
const { validateToken } = require('../middleware/index')

function initContact(app) {
  app.post('/api/customer', controller.contact)
  app.get('/api/customer', validateToken, (req, res) => {
    getCustomers()
      .then(data => {
        data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
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
