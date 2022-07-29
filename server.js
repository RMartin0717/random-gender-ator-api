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

//get array of word associations
app.get(`/api/v1/:word`, async (request, response) => {
  const { word } = request.params
  try {
    const word_associations = await database([word]).select()
    response.status(200).json(word_associations)
  }
  catch(error) {
    response.status(500).json({ error })
  }
})

//add new word association to any of the word tables
app.post(`/api/v1/:word`, async (request, response) => {
  const { word } = request.params
  const { word_association } = request.body
  const newWord = request.body

  if (!word_association) {
    response.status(422).json({ error: `Missing property of word_association. Expected format: { word_association: <String> }`})
  }
  try {
    const id = await database([word]).insert(newWord, 'id')
    response.status(201).json({ id });
  }
  catch (error) {
    response.status(500).json({ error });
  }
})

//delete a word from one of the tables
app.delete(`/api/v1/:word/:id`, async (request, response) => {
  const { word, id } = request.params
  try {
    const deleteWord = await database([word]).where({ id }).del()
    if (!deleteWord) {
      response.status(404).json({ error: `Word not found.`})
    }
    response.status(201).json(`${deleteWord} word deleted`)
  }
  catch(error) {
    response.status(500).json(error.message)
  }
})

app.get('/', (request, response) => {
  response.json({ endpoints: { animal: `/api/v1/animals`, extraterrestrial: `/api/v1/extraterrestrials`, trash: `/api/v1/trashes`, sparkle: `/api/v1/sparkles` }})
});

app.listen(port, () => {
  //get port (set above) and start server. 'listen' on this port
  console.log(`App is now listening on port ${port}!`)
})
