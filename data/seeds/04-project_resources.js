
exports.seed = function(knex) {
  return knex('project_resources').del()
    .then(function () {
      return knex('project_resources').insert([
        {project_resources_id: 1, resource_id: 1, task_id: 1},
        {project_resources_id: 2, resource_id: 2, task_id: 3},
        {project_resources_id: 3, resource_id: 3, task_id: 2}
      ]);
    });
};
