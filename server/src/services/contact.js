'use strict'

const { validateData, validateEmail, validatePhone , validateTexto} = require('../utils')
const contactRepository = require('../repositories/contact')

async function contact (data) {
  const valid = validateData(
    ['name', 'email', 'phone'],
    data
  )

  if (!valid || !validateEmail(data.email) || !validatePhone(data.phone) || !validateTexto(data.name)) {
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