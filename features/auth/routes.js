const { wrap } = require('async-middleware');

const verifyRequestBody = require('./commands/verify-request-body');
const login = require('./commands/login');
const redirectToDashboard = require('./commands/redirect-to-dashboard');
const loadPage = require('./commands/load-page');

module.exports = router => {
  router.post('/auth/telegram', wrap(login));

  return router;
};
