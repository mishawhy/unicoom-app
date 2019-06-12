const Knex = require('knex');
const bcrypt = require('bcrypt');

const knexConfig = require('../../db/knexfile');

const knex = Knex(knexConfig[process.env.NODE_ENV]);

async function createUser({ name, username, email, password }) {
  // const hashedPass = await bcrypt.hash(password, 5);
  const [user] = await knex('users')
    .insert({
      telegramId,
      name,
      photo,
      username,
      created_at: new Date(),
      updated_at: new Date(),
    })
    .returning(['email', 'name', 'username']);
  return user;
}

module.exports = {
  getUserForLoginData,
  getUserById,
};
