exports.up = async function up(knex) {
  await knex.schema.createTable('users', table => {
    table
      .increments('id')
      .unsigned()
      .notNullable()
      .primary(['user_job_pkey']);
    table
      .integer('telegramId')
      .unsigned()
      .notNullable();
    table
      .integer('score')
      .notNullable()
      .defaultTo(1);
    table.string('username', 60).notNullable();
    table.string('name', 60).notNullable();
    table.string('photo', 60).notNullable();
    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.fn.now());

    table.unique('telegramId');
    table.unique('username');
  });
};

exports.down = async function down(knex) {
  await knex.schema.dropTable('users');
};
