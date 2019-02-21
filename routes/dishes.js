const express = require('express');
const router = express.Router();
const db = require('../data/helpers/db');


router.get('/', (req, res) => {
    db.getDishes()
    .then(dishes => {
        res.status(200).json(dishes)
    })
    .catch(() => {
        res.status(500).json({error: 'could not retrieve table.'})
    })
});

module.exports = router;

