const userService = require('../services/user')

async function login(req, res, next) {
  const { username, password } = req.body
  let response = {}
  try {
    response = await userService.login({ username, password })
    
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
