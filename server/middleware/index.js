const jwt = require('jsonwebtoken')

const userRepository = require('../repositories/user')

const users = [
  { 
    name: 'Dulce Osman',
    email: 'test@test.com',
    password: '$2b$10$sPHIpHjY.bJtD1H0cTGnQ..TY1vsrA8jOOoOS1Pv0S86Au4yGm1uS' 
  }
]

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
  const payload = jwt.verify(token, '791c9c8e96022d9e3a67a6aaeddf56e48b069cf20042dcca5b8e4772a57ed132')
  if (payload.iat - new Date()) {

  }
  
  const response = await userRepository.login(payload.email)
  const user = response.rows.length ? response.rows[0] : null
  if (!user) {
    return res.status(401).send('Unauthorize')
  }
  req.user = {
    claims: payload.claims,
    email: user.email,
    id: user.id
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