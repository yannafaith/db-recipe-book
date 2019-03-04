
exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions',
      tbl => {
        tbl.increments()
        tbl.integer('step_num').notNullable()
        tbl.string('step_name').notNullable().unique()
        tbl.integer('recipe_id').unsigned()
        tbl.foreign('recipe_id').references('recipes.id')
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructions')
  };