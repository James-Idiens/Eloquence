/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schemea.createTable('novels', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('author')
    table.text('content')
    table.dateTime('created_at')
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('novels');
};
