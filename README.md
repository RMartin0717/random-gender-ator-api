# The Random Gender-ator API

## Table of Contents
* [Overview](#overview)
* [Endpoints](#endpoints)
* [In Progress](#inprogress)
* [Author](#author)
* [Technologies](#technologies)

## Overview 

### Deploy Link

https://the-random-gender-ator-api.herokuapp.com/

### Description

This API was built using Node.js with Express, Knex, and Postgres to work specifically with the project, [The Random Gender-ator](https://github.com/RMartin0717/random-gender-ator/blob/main/README.md). It has 4 endpoints which contain arrays of word associations for "animal", "extraterrestrial", "trash", and "sparkle"--the 4 base words used in the creation of new genders for The Random Gender-ator app.

Word associations for each of these words can be retrieved using GET requests to the respective endpoints and new words can be added to or deleted from these word association endpoints with POST and DELETE requests.

## Endpoints 

| Method | Endpoint | Request Body | Sample Response
--- | --- | --- | ---
`GET` | `'/api/v1/:word'` | n/a | `[{ "id": 1, "word_association": "squirrel", "created_at": "2022-07-29T20:42:22.972Z", "updated_at": "2022-07-29T20:42:22.972Z" }, ...]`
`POST` | `'/api/v1/:word'` | `{ "word_association": "gorilla" }` | `{ "id": [6] }`
`DELETE` | `'/api/v1/:word/:id'` | n/a | `"1 word deleted"`

### "word" parameter options (currently) include:

| Word Association | Endpoint
--- | ---
`animal` | `/api/v1/animals`
`extraterrestrial` | `/api/v1/extraterrestrials`
`trash` | `/api/v1/trashes`
`sparkle` | `/api/v1/sparkles`

## In Progress

I would like to research how to build out a testing suite for a backend app next for this project. This will start with researching frameworks and determining which one to use and then learning how to implement it.

## Authors
<table>
    <tr>
        <td> Riley Martin <a href="https://github.com/RMartin0717">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/76501236?s=460&u=56de3268b98bd73447d785601176518e3cd0141c&v=4" alt="R. Martin" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
    <tr>
        <td width="175" align="center">
            Database
        </td>
        <td width="175" align="center">
            Backend Environmet and Web App Framework
        </td>
        <td width="175" align="center">
            Query Builder
        </td>
    </tr>  
    <tr>
        <td>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5B8GMClLqIJ2RObCTxzObLFKRYbg7fIKlCaZIOqnQhglC9o5DXT7Eg5YWNTnIidoHD4&usqp=CAU" alt="postgres" width="100" height="auto" align="center" />
        </td>
        <td>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wwdNyt-3YpkexQQVyaLIqDLqFlSEBcAxjywEX9L_n_UutEm74piqD4h5NElu6gOQxEw&usqp=CAU" alt="node.js and express" width="100" height="auto" align="center" />         
        </td>
        <td>
            <img src="https://img.stackshare.io/service/3376/knex.png" alt="knex" width="100" height="auto" align="center" />
        </td>
  </tr>
</table>
