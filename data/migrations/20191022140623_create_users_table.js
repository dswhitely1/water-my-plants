exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('firstName', 255).notNullable();
    tbl.string('lastName', 255).notNullable();
    tbl
      .string('username', 255)
      .unique()
      .notNullable();
    tbl.string('password', 255).notNullable();
    tbl.string('phoneNumber', 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
