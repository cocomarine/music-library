const db = require('../db/index');

exports.createArtist = async (req, res) => {
  const { name, genre } = req.body;

  try {
    const {
      rows: [artist],
    } = await db.query(
      `INSERT INTO Artists (name, genre) VALUES ($1, $2) RETURNING *`,
      [name, genre]
    );
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
    const {
      rows: [artist],
    } = await db.query(`SELECT * FROM Artists WHERE id = $1`, [artistId]);

    if (!artist) {
      res.status(404).json({ message: `artist ${artistId} does not exist` });
    }

    res.status(200).json(artist);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.updateArtist = async (req, res) => {
  try {
    const { artistId } = req.params;
    const { name, genre } = req.body;
    const {
      rows: [artist],
    } = await db.query(
      `UPDATE Artists SET name = $1, genre = $2 WHERE id = $3 RETURNING *`,
      [name, genre, artistId]
    );

    if (!artist) {
      res.status(404).json({ message: `artist ${artistId} does not exist` });
    }

    res.status(200).json(artist);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.updateArtistByPatch = async (req, res) => {
  const { artistId } = req.params;
  const { name, genre } = req.body;

  let query, params;

  if (name && genre) {
    query = `UPDATE Artists SET name = $1, genre = $2 WHERE id = $3 RETURNING *`;
    params = [name, genre, artistId];
  } else if (name) {
    query = `UPDATE Artists SET name = $1 WHERE id = $2 RETURNING *`;
    params = [name, artistId];
  } else if (genre) {
    query = `UPDATE Artists SET genre = $1 WHERE id = $2 RETURNING *`;
    params = [genre, artistId];
  }

  try {
    const { rows: [artist] } = await db.query(query, params);

    if (!artist) {
      res.status(404).json({ message: `artist ${artistId} does not exist` });
    }

    res.status(200).json(artist);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.deleteArtist = async (req, res) => {
  try {
    const { artistId } = req.params;
    const { rows: [artist]} = await db.query(`DELETE FROM Artists WHERE id = $1 RETURNING *`, [
      artistId,
    ]);

    if (!artist) {
      res.status(404).json({ message: `artist ${artistId} does not exist` });
    }

    res.status(200).json(artist);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
