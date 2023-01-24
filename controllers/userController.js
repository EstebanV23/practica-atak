const express = require('express')
const { listUsers } = require('./../db/models/User')

const routerController = express.Router() // Creo las rutas para mis usuarios

// La ruta index o primaria, retornará todos los usuarios de la lista que hemos creado
routerController.get('/', (_, res) => {
  res.json(listUsers)
})

// En la ruta /user/logging verificará que los campos coincidan con un elemento en específico de la lista
routerController.get('/logging', (req, res, next) => {
  const { id, userName, password } = req.body
  const user = listUsers.find(user => user.id === id)
  if (!user) res.status(404).send('Not found user')
  if (user.password !== password || user.userName !== userName) res.status(402).send('Credentials failed')
  // Si todo cumple las condiciones lo enviamos al middleware que nos genera el token
  next()
})

module.exports = routerController
