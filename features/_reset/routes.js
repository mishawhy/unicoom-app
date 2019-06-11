const { wrap } = require('async-middleware');

const verifyRequestBody = require('./commands/verify-request-body');
const reset = require('./commands/reset');
const redirectToDashboard = require('./commands/redirect-to-dashboard');
const loadPage = require('./commands/load-page');
const loadChangePage = require('./commands/load-change-page');

module.exports = router => {
  router.post('/reset-password', wrap(verifyRequestBody), wrap(reset), wrap(redirectToDashboard));
  router.get('/reset-password', wrap(loadPage));
  router.get('/change-password/:token', wrap(loadChangePage));
  return router;
};
