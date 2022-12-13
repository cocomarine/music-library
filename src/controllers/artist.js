const db = require('../db/index');

exports.createArtist = async (req, res) => {
    const { name, genre } = req.body;

    try {
        const { rows: [ artist ] } = await db.query(
            `INSERT INTO Artists (name, genre) VALUES ($1, $2) RETURNING *`, [name, genre]);
        res.status(201).json(artist);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.getAllArtists = async (_, res) => {
    try {
        const { rows: artist } = await db.query('SELECT * FROM artists');
        res.status(200).json(artist);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.getArtistById = async (req, res) => {
    try {
        const { artistId } = req.params;
        const { rows: [artist] } = await db.query(`SELECT * FROM artists WHERE id = $1`, [ artistId ]);
    
        if (!artist) {
            res.status(404).json({ message: `artist ${artistId} does not exist` });
        } 
    
        res.status(200).json(artist);
    } catch (err) {
        res.status(500).json(err.message);
    }
};