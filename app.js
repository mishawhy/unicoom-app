require('dotenv').config({
  path: `./env-files/${process.env.NODE_ENV || 'development'}.env`,
});

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const i18n = require('i18n-express');
const geolang = require('geolang-express');
const RedisStore = require('connect-redis')(session);
const moment = require('moment');
const history = require('connect-history-api-fallback');
const initAuthMiddleware = require('./features/auth/init-auth-middleware');
const indexRouter = require('./routes/index');

const redisStoreConfig = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};

if (process.env.REDIS_URL) {
  redisStoreConfig.url = process.env.REDIS_URL; // this will use the REDIS_URL required for logging into the Redis addon provided by Heroku
}

if (process.env.REDIS_PASSWORD) {
  redisStoreConfig.password = process.env.REDIS_PASSWORD; // this will use the REDIS_PASSWORD if required
}

const redisStore = new RedisStore(redisStoreConfig);

const staticFolder = 'dist';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});
const { COOKIE_EXPIRATION_MS } = process.env;
app.use(
  session({
    store: redisStore,
    secret: 'keyboard cat',
    name: process.env.SESSION_COOKIE_NAME,
    resave: false,
    saveUninitialized: false,
    cookie: {
      // secure: process.env.NODE_ENV === 'production',
      secure: false,
      expires: Date.now() + parseInt(COOKIE_EXPIRATION_MS, 10),
      maxAge: parseInt(COOKIE_EXPIRATION_MS, 10),
    },
  })
);
initAuthMiddleware(app);
app.use('/api', indexRouter);
app.use(history({ verbose: true }));
app.use(express.static(path.join(__dirname, staticFolder)));

// sapp.use(express.static(`${__dirname}/${staticFolder}`));
// app.use(
//   geolang({
//     siteLangs: ['en', 'ru', 'ua'],
//   })
// );

// Middleware used for setting error and success messages as available in _ejs_ templates
app.use((req, res, next) => {
  if (req.session) {
    res.locals.messages = req.session.messages;
    res.locals.userInfo = req.session.userInfo;
    req.session.messages = {};
  }
  next();
});

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).render('pages/404');
});

module.exports = app;
