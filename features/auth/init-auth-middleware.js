const passport = require('passport');
const Knex = require('knex');
const bcrypt = require('bcrypt');

const knexConfig = require('../../db/knexfile');

const knex = Knex(knexConfig[process.env.NODE_ENV]);

const { TelegramStrategy } = require('passport-telegram-official');
// const { getUserForLoginData, getUserById } = require('./repository');

module.exports = function initAuthMiddleware(app) {
  passport.use(
    new TelegramStrategy(
      {
        botToken: process.env.BOT_TOKEN,
        passReqToCallback: true,
      },
      (req, profile, done) => {
        // req.session.user = user;
        knex('users')
          .where({ telegramId: profile.id })
          .then(results => {
            if (results.length < 1) {
              console.log('About to create user:', results);
              return knex('users')
                .insert({
                  telegramId: profile.id,
                  name: profile.first_name,
                  username: profile.username,
                  photo: profile.photo_url,
                })
                .returning('*')
                .then(user => {
                  console.log('Created user:', user);
                  return done(null, user);
                });
            }
            return done(null, results[0]);
          });
        // User.findOrCreate({ telegramId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
      }
    )
  );

  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser(async (obj, done) => {
    return done(null, obj);
  });

  app.use(passport.initialize());
  app.use(passport.session());
};
