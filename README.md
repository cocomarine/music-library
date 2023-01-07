# Music Library

A music library API created following a CRUD REST API technology using Node.js, Express, Mocha-Chai, Postman and pgAdmin. 

## Concepts covered

- Database design
- PostgreSQL
- CRUD operation 
- Using Postman to manage API requests
- Integration testing with Mocha and Chai
- XXXX
- XXX

## Technologies and languages

- JavaScript
- Node.js
- Express
- Node Package Manager (npm)
- PostgreSQL
- Mocha / Chai
- Github Actions workflow
- Postman
- Git & GitHub
- Docker


## Getting started


## API end points

Returns json data about a single user.

* **URL**

  /users/:id

* **Method:**

  `GET`
  
*  **Parameters**
> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `id=[integer]`    |  required | int ($int64)   | The specific numeric id             |


* **Response**
> | http code     | response                                                            |
> |---------------|---------------------------------------------------------------------|
> | `200`         | `{ id : 12, name : "Michael Bloom" }`                               |
> | `400`         | `{ error : "User doesn't exist" }`                                  |
