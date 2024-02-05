const http = require('http')

const server = http.createServer()

server.on('connection', (socket) => {
  cpnsole.log("New connection....")
})
try {
server.listen(3000)
console.log("listening on port: 3000")
} catch (err) {console.log(`Error with listening: ${err}`)}
