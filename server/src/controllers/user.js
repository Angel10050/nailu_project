'use strict'

const userService = require('../services/user')

async function login(req, res, next) {
  const { username, password } = req.body
  let response = {}
  console.log('estuve aqui');
  try {
    response = await userService.login({ username, password })
    console.log('estuve aqui');
    
    if (response.failed) {
      return res.status(response.status).send({ message: response.message })
    }
  } catch (err) {
    next(err)
  }
  res.status(200).json(response.data)
}

module.exports = {
  login
}
