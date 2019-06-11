const challengeRepo = require('../repository');

async function uploadVideo(req, res) {
  console.log(req);
  const { user } = req;
  const options = {
    title: 'Cretive challgen',
    creator: user.id,
    srcMp4: `${req.file.secure_url.slice(0, -3)}mp4`,
    poster: `${req.file.secure_url.slice(0, -3)}jpg`,
  };
  try {
    challenge = await challengeRepo.createChallenge(options);
  } catch (error) {
    challenge = error;
  }
  console.log(challenge);

  res.json({
    ...challenge,
  });
}

module.exports = uploadVideo;
