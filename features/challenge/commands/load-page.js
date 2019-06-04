const { getChallenges, getFaced } = require('../repository');
const { getPublicProfileByUsername } = require('../../profile/repository');
const { FETCH_INFO_ERROR_MESSAGE } = require('../constants');
const isAuthenticated = require('./is-authenticated');

async function loadPage(req, res) {
  try {
    challenges = await getChallenges();
  } catch (getUserError) {
    console.log(getUserError);
    req.session.messages = { databaseError: FETCH_INFO_ERROR_MESSAGE };
  }
  // res.json(challenges);
  res.render('pages/dashboard', { challenges, profile: req.user });
}

async function loadItem(req, res, next) {
  try {
    challenges = await getChallenges({ 'challenges.id': req.params.id });
  } catch (getUserError) {
    req.session.messages = { databaseError: FETCH_INFO_ERROR_MESSAGE };
  }
  // res.json(challenges);
  res.render('pages/challengeItem', {
    layout: 'layoutDetail',
    challenges,
    profile: req.user,
    isAuth: isAuthenticated(req),
  });
}

async function loadUserItems(req, res, next) {
  let challenges;
  try {
    user = await getPublicProfileByUsername(req.params.username);
    challenges = await getChallenges({ 'challenges.creator': user.id });
  } catch (getUserError) {
    console.log(getUserError);
    req.session.messages = { databaseError: FETCH_INFO_ERROR_MESSAGE };
  }
  // console.log({ isAuth: isAuthenticated(req) });
  // res.json({
  //   challenges,
  //   user,
  //   isAuth: isAuthenticated(req),
  // });
  res.render('pages/profile', {
    challenges,
    user,
    profile: req.user,
    // isAuth: isAuthenticated(req),
  });
}
async function loadUserFaced(req, res, next) {
  let challenges;
  try {
    user = await getPublicProfileByUsername(req.params.username);
    faced = await getFaced({ 'replies.creator': user.id });
  } catch (getUserError) {
    res.json(getUserError);
    req.session.messages = { databaseError: FETCH_INFO_ERROR_MESSAGE };
  }
  // console.log({ isAuth: isAuthenticated(req) });
  // res.json({
  //   faced,
  //   user,
  //   // isAuth: isAuthenticated(req),
  // });
  res.render('pages/profileFaced', {
    faced,
    user,
    profile: req.user,
    // isAuth: isAuthenticated(req),
  });
}

module.exports = { loadPage, loadItem, loadUserItems, loadUserFaced };
