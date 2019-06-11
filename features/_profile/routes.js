const { wrap } = require('async-middleware');

const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const updateUserInfo = require('./commands/update-user-info');
const updateUserPic = require('./commands/update-user-pic');
const updateUserAbout = require('./commands/update-user-about');
const requestBodyValidation = require('./commands/verify-request-body');

const loadPage = require('./commands/load-page');

const storage2 = cloudinaryStorage({
  cloudinary,
  folder: 'pic',
  allowedFormats: ['png', 'jpg'],
  params: {
    resource_type: 'image',
  },
});
const parser2 = multer({ storage: storage2 });

module.exports = (router, middlewares = []) => {
  router.get('/profile/edit', middlewares.map(middleware => wrap(middleware)), wrap(loadPage));

  router.post('/profile/edit', wrap(requestBodyValidation), wrap(updateUserInfo));
  router.post('/profile/edit/about', wrap(updateUserAbout));

  router.post(
    '/profile/pic/upload',
    middlewares.map(middleware => wrap(middleware)),
    parser2.single('pic_file'),
    wrap(updateUserPic)
  );

  return router;
};
