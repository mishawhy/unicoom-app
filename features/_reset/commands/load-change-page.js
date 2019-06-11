const debug = require('debug')('express:reset');

async function loadPage(req, res) {
  debug('reset:loadPage', req, res);
  res.render('pages/change-password');
}

module.exports = loadPage;
