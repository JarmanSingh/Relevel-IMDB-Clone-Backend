const express = require('express');
const { auth } = require("../middleware/auth");

const router = express.Router();

router.post("/addToFavorite", auth, (req, res) => {
});

router.post("/removeFromFavorite", auth, (req, res) => {

});

router.get("/getFavoredMovies", auth, (req, res) => {
});

module.exports = router;