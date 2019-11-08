const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRepository = require('../repositories/user');
const key = process.env.SECRET_KEY

async function login({ username, password }) {
  if (!username || !password) {
    return { failed: true, status: 400, message: 'los campos son requeridos' };
  }

  const response = await userRepository.login(username)
  const admin = response.rows.length ? response.rows[0] : null
  
  if (!admin) {
    return { failed: true, status: 404, message: 'Usuario o contraseña invalidos' }
  }

  try {
    const compare = await bcrypt.compare(password, admin.password);
    if (compare) {
      delete admin.password;
      const token = jwt.sign(
        { username: admin.username }, key , 
        {
          expiresIn: 60*30 // expires in 30 minutos
        }
      );
      return { data: { admin, token } };
    }
    return { failed: true, status: 404, message: 'Usuario o contraseña invalidos' }
  } catch (err) {
    throw err
  }
}

module.exports = {
  login
};
