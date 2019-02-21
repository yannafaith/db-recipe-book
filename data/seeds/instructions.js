
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_num: 1, step_name: 'Step 1 basic tacos', recipe_id: 1},
        {step_num: 2, step_name: 'Step 2 basic tacos', recipe_id: 1},
        {step_num: 3, step_name: 'Step 3 basic tacos', recipe_id: 1},

        {step_num: 1, step_name: 'Step 1 Tex-Mex Tacos', recipe_id: 2},
        {step_num: 2, step_name: 'Step 2 Tex-Mex Tacos', recipe_id: 2},
        {step_num: 3, step_name: 'Step 3 Tex-Mex Tacos', recipe_id: 2},

        {step_num: 1, step_name: 'Step 1 Chicken Pizza', recipe_id: 3},
        {step_num: 2, step_name: 'Step 2 Chicken Pizza', recipe_id: 3},
        {step_num: 3, step_name: 'Step 3 Chicken Pizza', recipe_id: 3},

        {step_num: 1, step_name: 'Step 1 BBQ Beef Pizza', recipe_id: 4},
        {step_num: 2, step_name: 'Step 2 BBQ Beef Pizza', recipe_id: 4},
        {step_num: 3, step_name: 'Step 3 BBQ Beef Pizza', recipe_id: 4},
      ]);
    });
};
