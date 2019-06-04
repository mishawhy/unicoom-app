exports.up = async function up(knex) {
  await knex.schema.createTable('challenges', table => {
    table
      .increments('id')
      .unsigned()
      .notNullable()
      .primary(['challenge_job_pkey']);
    table
      .integer('creator')
      .unsigned()
      .notNullable();
    table.string('title').notNullable();
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
  });
};

exports.down = async function down(knex) {
  await knex.schema.dropTable('challenges');
};
