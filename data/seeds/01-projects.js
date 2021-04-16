
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {project_name: "Tarot App", project_description: 'App that reveals your future', project_completed: false},
        {project_name: "Blog Post", project_description: 'Write blog for April', project_completed: true},
        {project_name: "Resume Update", project_description: 'update resume to send out application', project_completed: true},
      ]);
    });
};
