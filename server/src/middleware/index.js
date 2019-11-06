
const jwt = require('jsonwebtoken')

const userRepository = require('../repositories/user')

const key = process.env.SECRET_KEY
async function validateToken (req, res, next) {
  const { authorization } = req.headers
  const auth = authorization || ''
  if (!auth.startsWith('Bearer')) {
    return res.status(403).send('Invalid')
  }
  const split = authorization.split(' ')
  if (split.length !== 2) {
    return res.status(403).send('Forbiden')
  }
  const token = split[1]
  jwt.verify(token, key , async (err, token) => {
    if (err) {
      return res.status(401).json({ ok: false, message: 'La sesión ha caducado'});
    } 
    else {
      return res.status(200).json({ ok: true, message: token})
    }
  })
  
  
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