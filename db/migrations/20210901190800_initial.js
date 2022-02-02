
exports.up = function(knex) {
  return knex.schema
    .createTable('animals', function(table) {
      table.increments('id')
        .primary()
      table.string('animal_association')
        .notNullable()

      table.timestamps(true, true)
    })
    .createTable('extraterrestrials', function(table) {
      table.increments('id')
        .primary()
      table.string('extraterrestial_association')
        .notNullable()

      table.timestamps(true, true)
    })
    .createTable('trashes', function(table) {
      table.increments('id')
        .primary()
      table.string('trash_association')
        .notNullable()

      table.timestamps(true, true)
    })
    .createTable('sparkles', function(table) {
      table.increments('id')
        .primary()
      table.string('sparkle_association')
        .notNullable()

      table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('animals')
    .dropTable('extraterrestrials')
    .dropTable('trashes')
    .dropTable('sparkles')
};
