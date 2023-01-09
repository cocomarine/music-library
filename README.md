# Music Library

A music library API created following a CRUD REST API technology using Node.js, Express, Mocha-Chai, Postman and pgAdmin. 

## Concepts covered

- Database design and migration
- PostgreSQL
- Building databases in a Docker container
- Creating API using CRUD (Create, Read, Update and Delete) operations on databases
- Using Postman to manage API requests
- Integration testing using Mocha, Chai and SuperTest
- Use of Dotenv to store sensitive information
- Use of Nodemon to automatically restart the node application when code changes
- Github Actions for automated testing 

## Getting started
Fork and clone the repo, and run the following commands. Use Postman and pgAdmin to check if the CRUD operations are working. 
```bash
npm test  # to test the codes
npm start # to start the app at http://localhost:3000
```
----------------
## API end points

### Artist

<details>
 <summary><code>POST</code> <code><b>/artists</b></code> <code>(add a new artist)</code></summary>

#### Parameters and body content

> | Parameters | Body content |
> |------------|--------------|
> | None       | name [string], genre [string] |


#### Responses

> | code | description |
> |------|-------------|
> | `201` | successful operation

</details>

<details>
 <summary><code>GET</code> <code><b>/artists</b></code> <code>(find all artists)</code></summary>

#### Parameters and body content

> None


#### Responses

> | code | description |
> |------|-------------|
> | `200` | successful operation |

</details>

<details>
 <summary><code>GET</code> <code><b>/artists/{id}</b></code> <code>(find an artist by ID)</code></summary>

#### Parameters and body content

> | Parameters | Body content |
> |------------|--------------|
> | `artistId` | None |


#### Responses

> | code | description |
> |------|-------------|
> | `200` | successful operation |
> | `404` | aritst not found |

</details>

<details>
 <summary><code>PUT</code> <code><b>/artists/{id}</b></code> <code>(replace an artist with updated record)</code></summary>

#### Parameters and body content

> | Parameters | Body content |
> |------------|--------------|
> | `artistId` | name[string], genre[string]|


#### Responses

> | code | description |
> |------|-------------|
> | `200` | successful operation |
> | `404` | aritst not found |

</details>

<details>
 <summary><code>PATCH</code> <code><b>/artists/{id}</b></code> <code>(update an aritst's record)</code></summary>

#### Parameters and body content

> | Parameters | Body content |
> |------------|--------------|
> | `artistId` | name[string], genre[string]|


#### Responses

> | code | description |
> |------|-------------|
> | `200` | successful operation |
> | `404` | aritst not found |

</details>

<details>
 <summary><code>DELETE</code> <code><b>/artists/{id}</b></code> <code>(delete an artist)</code></summary>

#### Parameters and body content

> | Parameters | Body content |
> |------------|--------------|
> | `artistId` | None |


#### Responses

> | code | description |
> |------|-------------|
> | `200` | successful operation |
> | `404` | aritst not found |

</details>


### Album

<details>
 <summary><code>POST</code> <code><b>/artists/{id}/albums</b></code> <code>(add a new album associated to an artist)</code></summary>

#### Parameters and body content

> | Parameters | Body content |
> |------------|--------------|
> | `artistId` | name [string], year [integer] |


#### Responses

> | code | description |
> |------|-------------|
> | `201` | successful operation

</details>

<details>
 <summary><code>GET</code> <code><b>/albums</b></code> <code>(find all albums)</code></summary>

#### Parameters and body content

> None


#### Responses

> | code | description |
> |------|-------------|
> | `200` | successful operation |

</details>

<details>
 <summary><code>GET</code> <code><b>/albums/{id}</b></code> <code>(find an album by ID)</code></summary>

#### Parameters and body content

> | Parameters | Body content |
> |------------|--------------|
> | `albumId` | None |


#### Responses

> | code | description |
> |------|-------------|
> | `200` | successful operation |
> | `404` | album not found |

</details>

<details>
 <summary><code>PUT</code> <code><b>/albums/{id}</b></code> <code>(replace an album with updated record)</code></summary>

#### Parameters and body content

> | Parameters | Body content |
> |------------|--------------|
> | `albumId` | name[string], year[integer]|


#### Responses

> | code | description |
> |------|-------------|
> | `200` | successful operation |
> | `404` | album not found |

</details>

<details>
 <summary><code>PATCH</code> <code><b>/albums/{id}</b></code> <code>(update an album's record)</code></summary>

#### Parameters and body content

> | Parameters | Body content |
> |------------|--------------|
> | `albumId` | name[string], year[integer]|


#### Responses

> | code | description |
> |------|-------------|
> | `200` | successful operation |
> | `404` | album not found |

</details>

<details>
 <summary><code>DELETE</code> <code><b>/albums/{id}</b></code> <code>(delete an album)</code></summary>

#### Parameters and body content

> | Parameters | Body content |
> |------------|--------------|
> | `albumId` | None |


#### Responses

> | code | description |
> |------|-------------|
> | `200` | successful operation |
> | `404` | album not found |

</details>

------------------
## Models

<details>
 <summary>Artists</summary>

> | column | data type |
> |------|-------------|
> | id | integer (PK) |
> | name | string |
> | genre | string |

</details>

<details>
 <summary>Albums</summary>

> | column | data type |
> |------|-------------|
> | id | integer (PK) |
> | name | string |
> | year | integer |
> | artistId | integer (FK) |

</details>