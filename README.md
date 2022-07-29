# The Random Gender-ator API

## Table of Contents
* [Description](#description)
* [Deploy Link](#deploylink)
* [Endpoints](#endpoints)
* [In Progress](#inprogress)
* [Authors](#authors)
* [Technologies](#technologies)

## Description

This API was built using Node.js with Express, Knex, and Postgres to work specifically with the project, [The Random Gender-ator](https://github.com/RMartin0717/random-gender-ator/blob/main/README.md). It has 4 endpoints which contain arrays of word associations for "animal", "extraterrestrial", "trash", and "sparkle"--the 4 base words used in the creation of new genders for The Random Gender-ator app.

Word associations for each of these words can be retrieved using GET requests to the respective endpoints and new words can be added to or deleted from these word association endpoints with POST and DELETE requests.

## Deploy Link

The API is deployed on Heroku to the following link:

https://the-random-gender-ator-api.herokuapp.com/


## Endpoints 

"word" parameter endpoint options (currently) include:

| Word Association | Endpoint
--- | ---
`animal` | `/api/v1/animals`
`extraterrestrial` | `/api/v1/extraterrestrials`
`trash` | `/api/v1/trashes`
`sparkle` | `/api/v1/sparkles`

| Method | Endpoint | Request Body | Sample Response
--- | --- | --- | ---
`GET` | `'/api/v1/:word'` | n/a | `[{ "id": 1, "word_association": "squirrel", "created_at": "2022-07-29T20:42:22.972Z", "updated_at": "2022-07-29T20:42:22.972Z" }, ...]`
`POST` | `'/api/v1/:word'` | `{ "word_association": "gorilla" }` | `{ "id": [6] }`
`DELETE` | `'/api/v1/:word/:id'` | n/a | `"1 word deleted"`

## In Progress

The API is up and running on Heroku (link above). Next steps are to replace the current front end network calls to a public API with calls to this API.

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
    </tr>
        <td><img src="https://bs-uploads.toptal.io/blackfish-uploads/components/skill_page/content/logo_file/logo/195562/express_js-161052138fa79136c0474521906b55e2.png" alt="react" width="100" height="auto" /></td>
    <td><img src="https://img.favpng.com/16/11/19/node-js-javascript-web-application-express-js-computer-software-png-favpng-cYmJvJyBDcTNbLdSRdNAceLyW.jpg" alt="react" width="100" height="auto" /></td>
    <td><img src="https://img.stackshare.io/service/3376/knex.png" alt="react" width="100" height="auto" /></td>
    </tr>
</table>
