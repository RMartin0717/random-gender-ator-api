const express = require('express')
//getting access to express
const app = express()
//run express. app is a common variable for server
const cors = require('cors')
//allows other domains to access this one
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

//routes
  //get array of word associations (dynamic path)
  //post more words to the arrays

app.listen(port, () => {
  //get port (set above) and start server. 'listen' on this port
  console.log(`App is now listening on port ${app.get('port')}!`)
})
