const knex = require('../../db');

async function getUser(id) {
  const [user] = await knex('users')
    .where('id', id)
    .select('email', 'name', 'username', 'pic', 'about');
  return user;
}

async function getPublicProfileByUsername(username) {
  const [user] = await knex('users')
    .where('username', username)
    .select('name', 'id', 'username', 'pic', 'about');
  return user;
}

async function updateUserInfo({ name, username, email, id }) {
  const [user] = await knex('users')
    .where({ id })
    .update({
      name,
      email,
      username,
      updated_at: new Date(),
    })
    .returning(['email', 'name']);
  return user;
}
async function updateUserAbout({ about, id }) {
  const [user] = await knex('users')
    .where({ id })
    .update({
      about,
      updated_at: new Date(),
    })
    .returning(['email', 'name']);
  return user;
}
async function updateUserPic({ pic, id }) {
  const [user] = await knex('users')
    .where({ id })
    .update({
      pic,
      updated_at: new Date(),
    })
    .returning(['email', 'name', 'pic', 'username', 'id']);
  return user;
}

module.exports = {
  getUser,
  updateUserInfo,
  updateUserPic,
  getPublicProfileByUsername,
  updateUserAbout,
};
