const express = require('express');
const anime = express.Router();

const favAnime = require('../modals/anime')

anime.get('/', (req, res) => {
    res.status(200).json(favAnime)
});

anime.post('/new', async (req, res) => {
    const newAnime = req.body
    favAnime.push(newAnime);
    res.status(200).json(favAnime)
})

module.exports = anime;