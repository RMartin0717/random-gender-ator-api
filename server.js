const express = require('express')
//getting access to express
const app = express()
//run express. app is a common variable for server

app.set('port', process.env.PORT || 3001)
//set the port

app.listen(app.get('port'), () => {
  //get port (set above) and start server. 'listen' on this port
  console.log(`App is now listening on port ${app.get('port')}!`)
})
