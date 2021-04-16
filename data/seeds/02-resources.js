
exports.seed = function(knex) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        {resource_name: "Eloquent JS", resource_description: 'Text Book'},
        {resource_name: "Dimple", resource_description: 'Mentor'},
        {resource_name: "Google", resource_description: 'searching for thigns I do not know'},
      ]);
    });
};
