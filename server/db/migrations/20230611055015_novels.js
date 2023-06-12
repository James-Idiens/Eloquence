/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
  return knex.schema.createTable('novels', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('author')
    table.string('genre')
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
