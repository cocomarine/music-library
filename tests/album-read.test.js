const { expect } = require('chai');
const request = require('supertest');
const db = require('../src/db');
const app = require('../src/app');

describe('Read Album', () => {
  let artists, albums;

  beforeEach(async () => {
    const artistRes = await Promise.all([
      db.query(
        'INSERT INTO Artists (id, name, genre) VALUES( $1, $2, $3) RETURNING *',
        [1, 'Tame Impala', 'rock']
      ),
      db.query(
        'INSERT INTO Artists (id, name, genre) VALUES( $1, $2, $3) RETURNING *',
        [2, 'Kylie Minogue', 'pop']
      ),
      db.query(
        'INSERT INTO Artists (id, name, genre) VALUES( $1, $2, $3) RETURNING *',
        [3, 'Tame Antelope', 'jazz']
      ),
    ]);

    artists = artistRes.map(({ rows }) => rows[0]);

    const albumRes = await Promise.all([
      db.query(
        `INSERT INTO Albums (name, year, artistId) VALUES ($1, $2, $3) RETURNING *`,
        ['Currents', 2015, 1]
      ),
      db.query(
        `INSERT INTO Albums (name, year, artistId) VALUES ($1, $2, $3) RETURNING *`,
        ['Aphrodite', 2010, 2]
      ),
      db.query(
        `INSERT INTO Albums (name, year, artistId) VALUES ($1, $2, $3) RETURNING *`,
        ['Gallop', 2020, 3]
      ),
    ]);

    albums = albumRes.map(({ rows }) => rows[0]);
  });

  describe('GET /albums', () => {
    it('returns all album records in the database', async () => {
      const { status, body } = await request(app).get('/albums').send();

      expect(status).to.equal(200);
      expect(body.length).to.equal(3);

      body.forEach((albumRecord) => {
        const expected = albums.find((a) => a.id === albumRecord.id);
        expect(albumRecord).to.deep.equal(expected);
      });
    });
  });

  describe('GET /albums/{id}', () => {
    it('returns the album with the correct id', async () => {
      const { status, body } = await request(app)
        .get(`/albums/${albums[0].id}`)
        .send();

      expect(status).to.equal(200);
      expect(body).to.deep.equal(albums[0]);
    });

    it('returns a 404 if the album does not exist', async () => {
      const { status, body } = await request(app).get('/albums/9999999').send();

      expect(status).to.equal(404);
      expect(body.message).to.equal('album 9999999 does not exist');
    });
  });
});
