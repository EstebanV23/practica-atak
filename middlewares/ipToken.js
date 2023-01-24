const jwt = require('jsonwebtoken')

// Este middleware es utilizado para crear el token, y es el ultimo en ejecutarse luego de validarse la información del usuario
function ipToken (req, res, next) {
  const ip = req.socket.remoteAddress // Rescatamos la ip del usuario que nos hace la peticion
  jwt.sign(ip, 'secret_key', (err, token) => {
    if (err) res.status(400).json({ error: 'Error' }) // Si se genera un error respondemos al cliente sin dejarlo seguir
    // Si todo sale bien, se genera un token por la id
    res.json({
      msg: 'success',
      token
    })
  })
}

module.exports = ipToken
