const { wrap } = require('async-middleware');
const debug = require('debug')('express:*');
const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const verifyRequestBody = require('./commands/verify-request-body');
const uploadChallenge = require('./commands/upload');
const uploadReply = require('./commands/uploadReply');
const { loadPage, loadItem, loadUserItems, loadUserFaced } = require('./commands/load-page');

debug('upload');

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'demo',
  allowedFormats: ['mov', 'mp4'],
  params: {
    resource_type: 'video',
  },
});
const parser = multer({ storage });

function isAuthenticated(req, res, next) {
  if (req.user && req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/login');
}

module.exports = (router, middlewares = []) => {
  router.post(
    '/challenge/reply/publish',
    isAuthenticated,
    middlewares.map(middleware => wrap(middleware)),
    parser.single('file'),
    wrap(uploadReply)
  );
  router.post(
    '/challenge/publish',
    isAuthenticated,
    middlewares.map(middleware => wrap(middleware)),
    parser.single('file'),
    wrap(uploadChallenge)
  );
  router.get('/', isAuthenticated, middlewares.map(middleware => wrap(middleware)), wrap(loadPage));
  router.get('/challenge/:id', middlewares.map(middleware => wrap(middleware)), wrap(loadItem));
  router.get('/u/:username', middlewares.map(middleware => wrap(middleware)), wrap(loadUserItems));
  router.get(
    '/u/:username/faced',
    middlewares.map(middleware => wrap(middleware)),
    wrap(loadUserFaced)
  );
  return router;
};
