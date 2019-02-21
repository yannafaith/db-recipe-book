
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'tortillas'},
        {ingredient_name: 'chicken'},
        {ingredient_name: 'cheese'},
        {ingredient_name: 'salsa'},
        {ingredient_name: 'lettuce'},
        {ingredient_name: 'tomato'},
        {ingredient_name: 'pico de gallo'},
        {ingredient_name: 'jalapenos'},
        {ingredient_name: 'sour cream'},
        {ingredient_name: 'tomato sauce'},
        {ingredient_name: 'beef sausage'},
        {ingredient_name: 'mushrooms'},
        {ingredient_name: 'barbeque sauce'},
      ]);
    });
};
