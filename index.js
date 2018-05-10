const express = require('express')
const app = express()
const path = require('path')
const socket_io = require('socket.io')
const events = require('./events')

// Settings
app.set('port', process.env.PORT || 3000)

// Static Files
app.use(express.static(path.join(__dirname,'public')))

const server = app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})

const io = socket_io(server)
// Websockets
io.on('connection', (socket) => {
  console.log('Client conect:',socket.id)
  events.client_events(socket)
  
  /*
  socket.on('client_checked', data => {
    console.log(data)
    socket.broadcast.emit('server_checked', data)
  })

  /*
  socket.on('chat:client_typing', username => {
    console.log(username)
    socket.broadcast.emit('chat:server_typing', username)
  })
  */
})
