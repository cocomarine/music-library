# Music Library

A music library API created following a CRUD REST API technology using Node.js, Express, Mocha-Chai, Postman and pgAdmin. 

## Concepts covered

- Database design
- PostgreSQL
- Sequelize to interact with database
- Building databases in a Docker container
- CRUD operation 
- Using Postman to manage API requests
- Integration testing with Mocha and Chai
- Use of Dotenv to store sensitive information
- Use of Nodemon to automatically restart the node application when code changes

## Technologies and languages

- JavaScript
- Node.js
- Express
- Node Package Manager (npm)
- PostgreSQL
- Mocha / Chai
- Github Actions workflow
- Postman
- Docker


## API end points

### Artist

| Method | URL | Description | Parameters | Body content |
|--------|-----|-------------|------------|--------------|
| `POST` | `/artists` | add a new artist | none | name [string], genre [string] | 
| `GET`  | `/artists`| find all artists | none | none | 
| `GET` | `/artists/{id}` | find an artist by ID | `id=[integer]` | none | 



