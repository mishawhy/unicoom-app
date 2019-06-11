const { wrap } = require('async-middleware');
const debug = require('debug')('express:*');
const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const verifyRequestBody = require('./commands/verify-request-body');
const submit = require('./commands/submit');
const upload = require('./commands/upload');
const loadPage = require('./commands/load-page');

debug('upload');
cloudinary.config({
  cloud_name: 'drk41czr3',
  api_key: '928725152168644',
  api_secret: 'yU1DSCfepzPFSYtyw7lNk8inRkg',
});
const storage = cloudinaryStorage({
  cloudinary,
  folder: 'demo',
  allowedFormats: ['mov', 'mp4'],
  params: {
    resource_type: 'video',
  },
});
const parser = multer({ storage });

module.exports = (router, middlewares = []) => {
  router.post('/submit', wrap(submit));
  router.post(
    '/upload',
    middlewares.map(middleware => wrap(middleware)),
    parser.single('file'),
    wrap(upload)
  );
  router.get('/submit', wrap(loadPage));

  return router;
};
