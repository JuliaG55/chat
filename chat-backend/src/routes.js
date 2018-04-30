
/*
 | We use the database connection to perform queries.
 */

// const db = require('./database')

/*
 | We want to keep all WS connections in an object, so we can respond to them.
 */

const connections = {}

/*
 | We export the routes callback with all routes defined in the function. This
 | way, we can call this file in the index script and provide it with the 
 | express "app" instance along with the WS "io" instance.
 */

module.exports = (app, ws) => {
  /**
   * HTTP endpoint that returns all the messages from the DB.
   */
  app.get('/messages', (req, res) => {
    // ## You need to query the database for all messages here! ##
    // db.query('SELECT * FROM ...')

    res.send([])
  })

  /**
   * WS connection listener.
   */
  ws.on('connection', (socket) => {
    console.log('New WS connection.')

    // Save the socket.
    socket.id = Date.now()
    connections[socket.id] = socket

    // When a message comes through the socket.
    socket.on('message', (message) => {
      console.log(`New message received via WS: [${message}]`)

      // ## Note that here you also need to save the message to the dabase! ##
      // db.query('INSERT INTO ...')

      // We only support sending plaintext messages right now. We pass the
      // message to all saved connections. This way all clients can render
      // the message in the fronend.
      Object.values(connections).forEach(conn => conn.send(message))
    })

    // Remove the socket on disconnect.
    socket.on('close', () => delete connections[socket.id])
  })
}
