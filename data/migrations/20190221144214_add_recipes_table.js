
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('recipe_name').notNullable().unique()
        tbl.integer('dish_id').unsigned()
        tbl.foreign('dish_id').references('dishes.id')
    })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('recipes')
};


