
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", tbl => {
      tbl.increments("project_id")
      tbl.string('project_name', 128).notNullable().unique()
      tbl.string("project_description", 200)
      tbl.boolean("project_completed").defaultTo(0)
  })
  .createTable('resources', tbl => {
      tbl.increments("resource_id")
      tbl.string('resource_name', 128).notNullable().unique()
      tbl.string('resource_description', 200)
  })
  .createTable('tasks', tbl => {
      tbl.increments("task_id")
      tbl.string("task_description", 200).notNullable()
      tbl.string("task_notes", 128)
      tbl.boolean("task_completed").defaultTo(0)
      tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
  })
  .createTable('project_resources', tbl => {
      tbl.increments("project_resources_id")
      tbl.integer("task_id")
        .unsigned()
        .notNullable()
        .references("task_id")
        .inTable("tasks")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      tbl.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable('resources')
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("project_resources")
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
