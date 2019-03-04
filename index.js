const express = require('express');
const server = express();
const dishes = require('./routes/dishes');
const recipes = require('./routes/recipes');
const port = 3000;

server.use('/api/dishes', dishes);
server.use('/api/recipes', recipes);

server.get('/api', (req, res) => {
    res.send('API running!')
});

server.listen(port, () => {
    console.log(`***** API Listening on port ${port} ******`);
});



