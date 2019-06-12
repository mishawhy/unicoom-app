const knex = require('../../db');

async function updateAgeAndGender(params, id) {
  const [user] = await knex('users')
    .where({ id })
    .update({
      ...params,
      updated_at: new Date(),
    })
    .returning(['id', 'gender', 'age', 'username']);
  return user;
}

module.exports = {
  updateAgeAndGender,
};
