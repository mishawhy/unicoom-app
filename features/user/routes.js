const { wrap } = require('async-middleware');
const debug = require('debug')('express:*');
const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
// const verifyRequestBody = require('./commands/verify-request-body');
const uploadChallenge = require('./commands/upload');
// const uploadReply = require('./commands/uploadReply');
const { getUser } = require('./commands/load-page');

debug('upload');

function isAuthenticated(req, res, next) {
  if (req.user && req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/enter');
}

module.exports = (router, middlewares = []) => {
  // router.post(
  //   '/challenge/reply/publish',
  //   isAuthenticated,
  //   middlewares.map(middleware => wrap(middleware)),
  //   parser.single('file'),
  //   wrap(uploadReply)
  // );

  router.get(
    '/user/get',
    isAuthenticated,
    middlewares.map(middleware => wrap(middleware)),
    wrap(getUser)
  );
  // router.post(
  //   '/publish/new',
  //   middlewares.map(middleware => wrap(middleware)),
  //   parser.single('file'),
  //   wrap(uploadChallenge)
  // );
  // router.get('/', isAuthenticated, middlewares.map(middleware => wrap(middleware)), wrap(loadPage));
  // router.get('/challenge/:id', middlewares.map(middleware => wrap(middleware)), wrap(loadItem));
  // router.get('/u/:username', middlewares.map(middleware => wrap(middleware)), wrap(loadUserItems));
  // router.get(
  //   '/u/:username/faced',
  //   middlewares.map(middleware => wrap(middleware)),
  //   wrap(loadUserFaced)
  // );
  return router;
};
