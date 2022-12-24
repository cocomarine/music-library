const db = require('../db/index');

exports.createAlbum = async (req, res) => {
    const { id } = req.params;
    const { name, year, artistId } = req.body;


    try {
        const { rows: [ album ] } = await db.query(
            `INSERT INTO Albums (name, year, artistId) VALUES ($1, $2, $3) RETURNING *`, [ name, year, artistId ]
        );
        res.status(201).json(album);
    } catch (err) {
        res.status(500).json(err.message);
    }

};