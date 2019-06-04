exports.up = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.string('pic');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.dropColumn('pic');
    table.dropColumn('title');
  });
};
