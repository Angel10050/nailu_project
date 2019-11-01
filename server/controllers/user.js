'use strict'

const userService = require('../services/user')

async function login(req, res, next) {
  const { email, password } = req.body
  let response = {}
  try {
    response = await userService.login({ email, password })
console.log(response)
    if (response.failed) {
      return res.status(response.status).send({ message: response.message })
    }
  } catch (err) {
    next(err)
  }
  res.status(200).json(response.data)
}

async function signup(req, res, next) {
  const { body } = req
  let response = {}
  try {
    response = await userService.signup(body)
    console.log(response)
    if (response.failed) {
      return res.status(response.status).send({ message: response.message })
    }
  } catch (err) {
    console.log(err.message)
    next(err)
  }
  res.status(200).json(response.data)
}

module.exports = {
  login,
  signup
}