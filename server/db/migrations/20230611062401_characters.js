/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schemea.createTable('characters', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.text('note')
    table.integer('novel_id');
    table.dateTime('created_at');
    table.foreign('novel_id').references('novels.id')
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('characters')
};
