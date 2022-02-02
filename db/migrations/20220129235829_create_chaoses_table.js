exports.up = function(knex) {
  return knex.schema
    .createTable('chaoses', function(table) {
      table.increments('id')
        .primary()
      table.string('chaoses_association')
        .notNullable()

      table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('chaoses')
};


//practiced addidng a table and removing it
