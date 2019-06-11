const cloudinary = require('cloudinary');
const challengeRepo = require('../repository');

async function uploadVideo(req, res) {
  console.log(req);
  const { user } = req;
  const src = cloudinary.url(`${req.file.public_id}.${req.file.format}`, {
    resource_type: 'video',
    width: 355,
    height: 475,
    quality: 60,
    crop: 'fill',
  });
  const poster = cloudinary.url(`${req.file.public_id}.jpg`, {
    resource_type: 'video',
    width: 355,
    height: 475,
    crop: 'fill',
  });
  const options = {
    challenge: req.body.challenge,
    creator: user.id,
    srcMp4: src,
    poster,
  };
  try {
    reply = await challengeRepo.replyChallenge(options);
  } catch (error) {
    reply = error;
  }
  console.log(reply);

  res.json({
    ...reply,
  });
}

module.exports = uploadVideo;
