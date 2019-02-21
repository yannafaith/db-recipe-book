const express = require('express');
const router = express.Router();
const db = require('../data/helpers/db');


router.get('/', (req, res) => {
    db.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(() => {
        res.status(500).json({error: 'could not retrieve table.'})
    })
});

module.exports = router;