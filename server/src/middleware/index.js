'use strict'
const jwt = require('jsonwebtoken')

const key = process.env.SECRET_KEY
async function validateToken (req, res, next) {
  const { authorization } = req.headers
  const auth = authorization || ''
  if (!auth.startsWith('Bearer')) {
    return res.status(403).json({ ok: false, message: 'Invalid'})
  }
  const split = authorization.split(' ')
  if (split.length !== 2) {
    return res.status(403).json({ ok: false, message: 'Forbiden'})
  }
  const token = split[1]
  jwt.verify(token, key , async (err, token) => {
    if (err) {
      return res.status(401).json({ ok: false, message: 'La sesión ha caducado'});
    }
  })

  next()
}

function handlerError (err, req, res, next) {
  if (err.message.endsWith('"users_username_key"')) {
    return res.status(400).json({ message: 'el usuario no existe' })
  }

  res.status(500).json({ message: 'Error interno del sistema' })
}

module.exports = {
  validateToken,
  handlerError
}