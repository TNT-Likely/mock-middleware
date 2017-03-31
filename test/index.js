var express = require('express')
var middleware = require('../index')

var app = express()

app.use('/favicon.ico', function(req, res, next) {
  res.end()
})

app.use(middleware({
  basePath: __dirname,
  mockFolder: 'mocks',
  routeFile: 'route.js'
}))

app.listen('4000', function() {
  console.log('> test server listend at port 4000')
})
