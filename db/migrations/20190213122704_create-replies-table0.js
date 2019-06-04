exports.up = async function up(knex) {
  await knex.schema.createTable('replies', table => {
    table
      .increments('id')
      .unsigned()
      .notNullable()
      .primary(['challenge_job_pkey']);
    table
      .integer('creator')
      .unsigned()
      .notNullable();
    table
      .integer('challenge')
      .unsigned()
      .notNullable();
    table.string('poster').notNullable();
    table.string('srcMp4').notNullable();

    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.fn.now());

    table
      .foreign('creator')
      .references('id')
      .inTable('users');

    table
      .foreign('challenge')
      .references('id')
      .inTable('challenges');
  });
};

exports.down = async function down(knex) {
  await knex.schema.dropTable('replies');
};
