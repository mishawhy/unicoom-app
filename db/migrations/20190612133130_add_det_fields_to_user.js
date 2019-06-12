exports.up = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.string('gender');
    table.integer('age');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.dropColumn('gender');
    table.dropColumn('age');
  });
};
