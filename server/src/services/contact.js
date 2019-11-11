'use strict'
const moment = require('moment')

const {
  validateData,
  validateEmail,
  validatePhone,
  validateTexto
} = require('../utils')
const contactRepository = require('../repositories/contact')

async function contact(data) {
  data.date = moment().format('YYYY-MM-DD')
  const valid = validateData(['name', 'email', 'phone'], data)

  if (
    !valid ||
    !validateEmail(data.email) ||
    !validatePhone(data.phone) ||
    !validateTexto(data.name)
  ) {
    return { failed: true, status: 400, message: 'Datos invalidos' }
  }

  try {
    await contactRepository.contact(data)
    return { data }
  } catch (err) {
    throw err
  }
}

module.exports = {
  contact
}
