const jsonServer = require('json-server')

const data = require('./data.json')

const middlewares = jsonServer.defaults()
const routes = jsonServer.router(data)
const app = jsonServer.create()

app.use(middlewares)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Request-Method', '*')
  next()
})
app.use(routes)

app.listen(3333, () =>
  console.log('🔥 Server started at http://localhost:3333')
)
