const knex = require('knex');
const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

module.exports = {

    // dishes 

    getDishes: (id) => {
        if (id) {
            return db('dishes').where({id: id})
        }
        return db('dishes')
    },

    addDish: (dish) => {
        return db('dishes').insert(dish)
    },

    // recipes 
    getRecipes: (id) => {
        if (id) {
            return db('recipes').where({id: id})
        }
        return db('recipes')
    },

    addRecipe: (recipe) => {
        return db('recipes').insert(recipe)
    },
}