exports.seed = function(knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {task_description: "Create spinner", task_notes: 'use code from lecture', task_completed: false, project_id: 1},
        {task_description: "free write", task_completed: true, project_id: 2},
        {task_description: "make changes based on mentors advice", task_notes: 'wait for it', task_completed: true, project_id: 3},
      ]);
    });
};
