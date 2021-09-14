exports.up = function(knex) {
  return knex.schema
    .createTable('squares', function(table) {
      table.increments('id')
        .primary()
      table.string('squares_association')
        .notNullable()

      table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('squares')
};
