const express = require('express')
const routerController = require('./controllers/userController')
const PORT = process.env.PORT || 3000
const ipToken = require('./middlewares/ipToken')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  const ip = req.socket.remoteAddress
  res.json({ ip })
})

app.use('/user',
  routerController,
  ipToken
)

app.use((_, res) => {
  res.send('Page not found')
})

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`)
})
