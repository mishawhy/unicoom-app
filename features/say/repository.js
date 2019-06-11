const knex = require('../../db');

async function createChallenge(params) {
  const [challenge] = await knex('challenges')
    .insert({
      ...params,
      created_at: new Date(),
      updated_at: new Date(),
    })
    .returning(['id', 'title', 'creator', 'poster', 'srcMp4', 'created_at']);
  return challenge;
}
async function replyChallenge(params) {
  const [reply] = await knex('replies')
    .insert({
      ...params,
      created_at: new Date(),
      updated_at: new Date(),
    })
    .returning(['id', 'challenge', 'creator', 'poster', 'srcMp4', 'created_at']);
  return reply;
}
async function getChallenges(query) {
  let challenges;
  if (query) {
    challenges = await knex('challenges')
      .select(
        'challenges.title',
        { challengeId: 'challenges.id' },
        'challenges.creator',
        'users.pic',
        'users.name',
        'users.id',
        'users.username',
        'challenges.poster',
        'challenges.srcMp4',
        'challenges.created_at'
      )
      .orderBy('created_at', 'desc')
      .innerJoin('users', 'challenges.creator', '=', 'users.id')
      .where(query);
  } else {
    challenges = await knex('challenges')
      .select(
        'challenges.title',
        { challengeId: 'challenges.id' },
        'challenges.creator',
        'users.pic',
        'users.name',
        'users.username',
        'users.id',
        'challenges.poster',
        'challenges.srcMp4',
        'challenges.created_at'
      )
      .orderBy('created_at', 'desc')
      .innerJoin('users', 'challenges.creator', '=', 'users.id');
  }
  const challengesWithReplies = [];

  for (const item of challenges) {
    const replies = await knex('replies')
      .select(
        'replies.id',
        'replies.poster',
        'replies.srcMp4',
        'replies.creator',
        'replies.created_at',
        { userId: 'users.id' },
        'users.name',
        'users.username',
        'users.pic'
      )
      .where('challenge', item.challengeId)
      // .orderBy('id', 'desc')
      .innerJoin('users', 'replies.creator', '=', 'users.id');
    challengesWithReplies.push({ ...item, replies, repliesCount: replies.length });
  }
  return challengesWithReplies;
}

async function getFaced(query) {
  let faced;
  if (query) {
    faced = await knex('replies')
      .select(
        { facedId: 'replies.id' },
        'replies.creator',
        'users.pic',
        'users.name',
        'users.id',
        'users.username',
        'replies.poster',
        'replies.srcMp4',
        'replies.created_at',
        { challengeTitle: 'challenges.title' },
        { challengeId: 'replies.challenge' }
      )
      .orderBy('created_at', 'desc')
      .innerJoin('users', 'replies.creator', '=', 'users.id')
      .innerJoin('challenges', 'replies.challenge', '=', 'challenges.id')
      .where(query);
  } else {
    faced = await knex('replies')
      .select(
        { facedId: 'replies.id' },
        'replies.creator',
        'users.pic',
        'users.name',
        'users.id',
        'users.username',
        'replies.poster',
        'replies.srcMp4',
        'replies.created_at',
        { challengeTitle: 'challenges.title' },
        { challengeId: 'replies.challenge' }
      )
      .orderBy('created_at', 'desc')
      .innerJoin('users', 'replies.creator', '=', 'users.id')
      .innerJoin('challenges', 'replies.challenge', '=', 'challenges.id');
  }

  return faced;
}
module.exports = {
  createChallenge,
  getChallenges,
  replyChallenge,
  getFaced,
};
