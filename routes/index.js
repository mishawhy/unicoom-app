const express = require('express');

const router = express.Router();

// const mountRegisterRoutes = require('../features/register/routes');
// const mountLoginRoutes = require('../features/login/routes');
// const mountLogoutRoutes = require('../features/logout/routes');
// const mountResetPasswordRoutes = require('../features/reset/routes');
// const mountProfileRoutes = require('../features/profile/routes');
// const mountSubmitRoutes = require('../features/submit/routes');
const mountSayRoutes = require('../features/say/routes');
const mountUserRoutes = require('../features/user/routes');
const mountAuthRoutes = require('../features/auth/routes');
// function isAuthenticated(req, res, next) {
//   if (req.user && req.isAuthenticated()) {
//     return next();
//   }
//
//   return res.redirect('/login');
// }

// router.get('/get', (req, res) => {
//   res.json({
//     hello: 'hello world',
//   });
// });
//
// router.get('/maps', isAuthenticated, (req, res) => {
//   res.render('pages/maps');
// });
//
// router.get('/tables', isAuthenticated, (req, res) => {
//   res.render('pages/tables');
// });
//
mountSayRoutes(router);
mountUserRoutes(router);
mountAuthRoutes(router);
// mountSubmitRoutes(router);
// mountRegisterRoutes(router);
// mountLoginRoutes(router);
// mountLogoutRoutes(router, [isAuthenticated]);
// mountResetPasswordRoutes(router);
// mountProfileRoutes(router, [isAuthenticated]);

module.exports = router;
