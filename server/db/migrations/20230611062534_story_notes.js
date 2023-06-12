/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('story_notes', (table) => {
    table.increments('id').primary();
    table.integer('novel_id');
    table.text('note');
    table.dateTime('created_at');
    table.foreign('novel_id').references('novels.id')

  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('story_notes')
};
