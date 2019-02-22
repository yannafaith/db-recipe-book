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

router.get('/:id', (req, res) => {
    db.getRecipes(req.params.id)
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(() => {
        res.status(500).json({error: 'could not retrieve table.'})
    })
});

router.post('/', (req, res) => {
    db.addRecipe(req.body)
    .then(() => {
        res.status(201).json(req.body.id)
    })
    .catch(() => {
        res.status(500).json({error: 'could not add recipe.'})
    })
})

module.exports = router;