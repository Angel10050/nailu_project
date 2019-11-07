'use strict'

const contactService = require('../services/contact')

async function contact (req, res, next) {
  const { body } = req
  let response = {}
  try {
    response = await contactService.contact(body)
    
    if (response.failed) {
      return res.status(response.status).send({ message: response.message })
    }
  } catch (err) {
    next(err)
  }
  res.status(200).json(response.data)
}

module.exports = {
  contact
}