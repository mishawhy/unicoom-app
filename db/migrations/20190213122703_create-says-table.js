exports.up = async function up(knex) {
  await knex.schema.createTable('says', table => {
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
      .integer('score')
      .notNullable()
      .defaultTo(1);
    table.string('cloudName').notNullable();
    table.string('publicId').notNullable();

    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.fn.now());

    table
      .timestamp('expired_at')
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
