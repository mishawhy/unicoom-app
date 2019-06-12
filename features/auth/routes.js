const { wrap } = require('async-middleware');

const passport = require('passport');

const login = require('./commands/login');
const logout = require('./commands/logout');
// const redirectToDashboard = require('./commands/redirect-to-dashboard');
// const loadPage = require('./commands/load-page');
// const verifyRequestBody = require('./commands/verify-request-body');
module.exports = router => {
  // router.get('/auth/telegram', wrap(login));
  router.get('/auth/telegram', passport.authenticate('telegram'), wrap(login));
  router.get('/logout', wrap(logout));
  return router;
};
