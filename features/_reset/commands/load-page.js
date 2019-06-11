const debug = require('debug')('express:reset');

async function loadPage(req, res) {
  debug('reset:loadPage', req, res);
  res.render('pages/reset-password');
}

module.exports = loadPage;
