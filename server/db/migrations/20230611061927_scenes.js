/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('scenes', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.integer('chapter_id')
    table.text('content')
    table.dateTime('created_at').defaultTo(knex.fn.now())
    table.foreign('chapter_id').references('chapters.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('scenes')
}
