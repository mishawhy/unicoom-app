const knex = require('../../db');

async function createChallenge(params) {
  const [challenge] = await knex('challenges')
    .insert({
      ...params,
      created_at: new Date(),
      updated_at: new Date(),
    })
    .returning(['title', 'creator', 'poster', 'srcMp4', 'created_at']);
  return challenge;
}

module.exports = {
  createChallenge,
};
