const cloudinary = require('cloudinary');
const say = require('../repository');

async function feed(req, res) {
  try {
    sayResult = await say.feed(req.user);
    res.json({
      feed: sayResult,
    });
  } catch (e) {
    res.json({
      error: e,
    });
  }
}

module.exports = feed;
