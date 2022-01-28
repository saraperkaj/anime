const database = require("../db/dbConfig");

const getAllAnimes = async () => {
  try {
    const animes = await database.any("SELECT * FROM fav_animes");
    return animes;
  } catch (error) {
    return error;
  }
};

const addNewAnime = async (newAnime) => {
  try {
    const animes = await database.any(
      "INSERT INTO fav_animes (name, release) VALUES ($1, $2) RETURNING *",
      [newAnime.name, newAnime.release]
    );
    return animes;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAnimes,
  addNewAnime,
};
