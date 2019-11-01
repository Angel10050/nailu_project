'use strict'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { validateData } = require('../utils')
const userRepository = require('../repositories/user')

async function login ({ email, password }) {
  if (!email || !password) {
    return { failed: true, status: 400, message: 'All fields are required' }
  }

  const response = await userRepository.login(email)
  const user = response.rows.length ? response.rows[0] : null
console.log('user', user)
  if (!user) {
    return { failed: true, status: 404, message: 'User not found' }
  }

  try {
    const compare = await bcrypt.compare(password, user.password)
    console.log('compare', compare)
    if (compare) {
      delete user.password
      const token = jwt.sign({ name: user.name, email: user.email }, '791c9c8e96022d9e3a67a6aaeddf56e48b069cf20042dcca5b8e4772a57ed132', {  })
      return { data: { user, token } }
    }
  } catch (err) {

  }
}

async function signup (data) {
  const valid = validateData(
    ['name', 'email', 'password'],
    data
  )

  if (!valid) {
    return { failed: true, status: 400, message: 'All fields are required' }
  }

  try {
    const passwordHash = await bcrypt.hash(data.password, 10)
    data.password = passwordHash
    await userRepository.signup(data)
    delete data.password
    return { data }
  } catch (err) {
    throw err
  }
}

module.exports = {
  login,
  signup
}