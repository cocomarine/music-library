const { expect } = require('chai');
const request = require('supertest');
const db = require('../src/db');
const app = require('../src/app');

describe('Delete Album', () => {
    let artist, album;

    beforeEach(async () => {
        const artistRes = await db.query(
            `INSERT INTO Artists (id, name, genre) VALUES ($1, $2, $3) RETURNING *`, 
            [1, 'Tame Tampala', 'rock']
        );
    
        artist = artistRes.rows[0];

        const albumRes = await db.query(
            `INSERT INTO Albums (name, year, artistId) VALUES ($1, $2, $3) RETURNING *`,
            ['Currents', 2015, 1]
        );

        album = albumRes.rows[0];
    });

    describe('DELET /albums/{id}', () => {
        it('deletes the album and return the deleted data', async () => {
            const { status, body } = await request(app)
                .delete(`/albums/${album.id}`)
                .send();
            
            expect(status).to.equal(200);
            expect(body).to.deep.equal({
                id: album.id,
                name: 'Currents',
                year: 2015,
                artistid: artist.id
            });
        });

        it('returns a 404 if the album does not exist', async () => {
            const { status, body } = await request(app)
                .delete('/albums/9999999')
                .send();

            expect(status).to.equal(404);
            expect(body.message).to.equal('album 9999999 does not exist');
        });
    });
});