'use strict'

const bcrypt = require('bcrypt')

/* usar este usuraio y contraseña para probar la verificacion del enpoint
{ 
	"username": "lida11",
	"password": "Nailu.lijara11"
}
 */

const admin = [
  { 
    username: 'lida11',
    password: '$2b$10$Pk9NFOSPiCvPjSoLR2mFle.OoznZnA8T0XZJA53VTLybzplDFEP4O' 
  }
]

function authInit (app) {

  app.post('/api/login', async (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password) {
      return res.status(400).json({ message: 'Invalid data' })
    }

    const user = admin.find(item => item.username === username)

    if (!user) {
      res.status(404).json({ message: 'Usuario o contraseña invalidos' })
    }

    try {
      const compare = await bcrypt.compare(password, user.password)
      if (compare) {
        delete user.password
        
        return res.status(200).json(user)
      }
    } catch (err) {

    }
    res.status(404).json({ message: 'Usuario o contraseña invalidos' })
  })
}

module.exports = authInit
