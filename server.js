require('dotenv').config()
const express = require('express')
//getting access to express
const app = express()
//run express. app is a common variable for server
const cors = require('cors')
//allows other domains to access this one
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)
const port = process.env.PORT || 5000



app.use(express.json())
app.use(cors())

//routes
  //get array of word associations (dynamic path)
app.get(`/api/v1/:word`, async (request, response) => {
  const { word } = request.params
  try {
    const words = await database([word]).select()
    response.status(200).json(words)
  }
  catch(error) {
    response.status(500).json({ error})
  }
})

  //post more words to the arrays
app.post(`/api/v1/:word`, async (request, response) => {
  const { word } = request.params
  const { wordAssociation } = request.body
  const newWord = request.body

  if (!wordAssociation) {
  response.status(422).json({ error: `Missing property of wordAssociation. Expected format: { wordAssociation: <String> }`})
  }
  try {
  const id = await database(`${word}`).insert(newWord, 'id')
  response.status(201).json({ id });
  } catch (error) {
    response.status(500).json({ error });
  }
})

  //delete words from the arrays
app.delete(`/api/v1/:word/:id`, async (request, response) => {
  const { word, id } = request.params
  try {
    const deleteWord = await database(`${word}`).where({ id }).del()
    if (!deleteWord) {
      response.status(404).json({ error: `Word not found.`})
    }
    response.status(201).json(`${deleteWord} word deleted`)
  } catch(error) {
    response.status(500).json(error.message)
  }
})

app.get('/', (request, response) => {
  response.json({ test: `Server is waiting to GET some info!` })
});

app.listen(port, () => {
  //get port (set above) and start server. 'listen' on this port
  console.log(`App is now listening on port ${port}!`)
})
