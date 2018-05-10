module.exports = {
  
  client_events: (socket) => {
    
    socket.on('client_checked', data => {
      console.log(data)
      socket.broadcast.emit('server_checked', data)
    })

  }
}