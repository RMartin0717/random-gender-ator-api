
exports.up = function(knex) {
  return knex.schema
    .createTable('animals', function(table) {
      table.increments('id')
        .primary()
      table.string('animal_association')
        .notNullable()

      table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('animals')
};
