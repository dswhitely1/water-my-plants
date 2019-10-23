exports.up = function(knex) {
  return knex.schema.createTable('plants', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    tbl.string('type', 255).notNullable();
    tbl.string('location', 255).notNullable();
    tbl.string('waterSchedule', 255).notNullable();
    tbl.dateTime('nextWatering').defaultTo(knex.fn.now());
    tbl
      .integer('userId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('plants');
};
