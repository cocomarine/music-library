const { expect } = require('chai');
const request = require('supertest');
const db = require('../src/db');
const app = require('../src/app');

describe('Update Album', () => {
  let artist, album;

  beforeEach(async () => {
    const artistRes = await db.query(
      'INSERT INTO Artists (id, name, genre) VALUES($1, $2, $3) RETURNING *',
      [1, 'Tame Impala', 'rock']
    );

    artist = artistRes.rows[0];

    const albumRes = await db.query(
      `INSERT INTO Albums (name, year, artistId) VALUES ($1, $2, $3) RETURNING *`,
      ['Currents', 2015, 1]
    );

    album = albumRes.rows[0];
  });

  describe('PUT /albums/{id}', () => {
    it('replaces the album and returns the updated record', async () => {
      const { status, body } = await request(app)
        .put(`/albums/${album.id}`)
        .send({ name: 'something different', year: 2010 });

      expect(status).to.equal(200);
      expect(body).to.deep.equal({
        id: album.id,
        name: 'something different',
        year: 2010,
        artistid: artist.id
      });
    });

    it('returns a 404 if the albume does not exist', async () => {
      const { status, body } = await request(app)
        .put('/albums/12345')
        .send({ name: 'something different', year: 2010 });

      expect(status).to.equal(404);
      expect(body.message).to.equal('album 12345 does not exist')
    });
  });

  describe('PATCH /albums/{id}', () => {
    it('updates the album and returns the updated record', async () => {
      const { status, body } = await request(app)
        .patch(`/albums/${album.id}`)
        .send({ name: 'something different', year: 2023 });

      expect(status).to.equal(200);
      expect(body).to.deep.equal({
        id: album.id,
        name: 'something different',
        year: 2023,
        artistid: artist.id
      });
    });
  
    it('returns a 404 if the albume does not exist', async () => {
      const { status, body } = await request(app)
        .patch('/albums/12345')
        .send({ name: 'something different', year: 2023 });

      expect(status).to.equal(404);
      expect(body.message).to.equal('album 12345 does not exist')
    });
  });
});
