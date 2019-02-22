
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Traditional Tacos', dish_id: 1},
        {recipe_name: 'Tex-Mex Tacos', dish_id: 1},
        {recipe_name: 'Chicken Pizza', dish_id: 2},
        {recipe_name: 'BBQ Beef Pizza', dish_id: 2},
      ]);
    });
};
