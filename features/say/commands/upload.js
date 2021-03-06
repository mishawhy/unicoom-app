const cloudinary = require('cloudinary');
const say = require('../repository');
const user = require('../../user/repository');

async function uploadVideo(req, res) {
  // console.log(req.file);
  // console.log(cloudinary);
  try {
    const poster = cloudinary.url(`${req.file.public_id}.jpg`, {
      resource_type: 'video',
    });
    const det = await cloudinary.v2.uploader.upload(poster, { detection: 'adv_face' });
    // res.json({
    //   det,
    // });

    const options = {
      creator: req.user.id,
      publicId: req.file.public_id,
      cloudName: 'hukuvq2x5',
      score: 1,
    };
    console.log(det.info.detection);
    if (det.info.detection.adv_face.data) {
      const { gender, age } = det.info.detection.adv_face.data[0].attributes;
      await user.updateAgeAndGender({ age, gender }, req.user.id);
    }

    const sayResult = await say.create(options);
    res.json({
      ...sayResult,
    });
  } catch (e) {
    console.log(e);
  }
  // console.log(JSON.stringify(det));
  // res.json({
  //   poster,
  //   det: JSON.stringify(det),
  // });
  // cloudinary.v2.api.update(req.file.public_id, { detection: 'adv_face' }, function(error, result) {
  //   res.json({
  //     ...result,
  //   });
  // });

  // console.log(req);
  // const { user } = req;
  // const src = cloudinary.url(`${req.file.public_id}.${req.file.format}`, {
  //   resource_type: 'video',
  //   width: 355,
  //   height: 475,
  //   quality: 60,
  //   crop: 'fill',
  // });

  // const options = {
  //   title: req.body.title,
  //   creator: user.id,
  //   srcMp4: src,
  //   poster,
  // };
  // try {
  //   challenge = await challengeRepo.createChallenge(options);
  // } catch (error) {
  //   challenge = error;
  // }
  // console.log(challenge);
  //
  // res.json({
  //   ...challenge,
  // });
}

module.exports = uploadVideo;
