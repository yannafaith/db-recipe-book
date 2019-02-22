const knex = require('knex');
const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

module.exports = {

    // dishes 

    getDishes: (id) => {
        if (id) {
            return db('dishes').where({'dishes.id':id}).join('recipes', {'dishes.id': 'recipes.dish_id'}).select('dish_name', 'recipe_name')
        }
        return db('dishes')
    },

    addDish: (dish) => {
        return db('dishes').insert(dish)
    },

    // recipes 
    getRecipes: (id) => {
        if (id) {
            return db('recipes').where({'recipes.id': id}).join('dishes', {'recipes.dish_id': 'dishes.id'}).select('dish_name', 'recipe_name')
        }
        return db('recipes')
    },

    addRecipe: (recipe) => {
        return db('recipes').insert(recipe)
    },
}