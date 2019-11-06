
const jwt = require('jsonwebtoken')

const userRepository = require('../repositories/user')

async function validateToken (req, res, next) {
  const { authorization } = req.headers
  console.log('authorization', authorization)
  const auth = authorization || ''
  if (!auth.startsWith('Bearer')) {
    return res.status(403).send('Invalid')
  }
  const split = authorization.split(' ')
  console.log(split)
  if (split.length !== 2) {
    return res.status(403).send('Forbiden')
  }
  const token = split[1]
  const payload = jwt.verify(token, "689cba29d8f0ab3d5c9028a307fa061b")
  if (payload.iat - new Date()) {}
  const response = await userRepository.login(payload.username)
  const admin = response.rows.length ? response.rows[0] : null
  if (!admin) {
    return res.status(401).send('Unauthorize')
  }
  req.user = {
    claims: payload.claims,
    username: admin.username,
    id: admin.id
  }
  console.log(payload)
  next()
}

function handlerError (err, req, res, next) {
  if (err.message.endsWith('"users_email_key"')) {
    return res.status(400).json({ message: 'user already exist' })
  }

  res.status(500).json({ message: 'Internal server error' })
}

module.exports = {
  validateToken,
  handlerError
}