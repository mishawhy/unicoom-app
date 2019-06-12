const cloudinary = require('cloudinary');
const say = require('../repository');

async function uploadVideo(req, res) {
  // console.log(req.file);
  // console.log(cloudinary);
  // res.json({
  //   ...cloudinary,
  // });
  try {
    const poster = cloudinary.url(`62531025_2339052489754701_3031537748427005020_n_s2nf1b.jpg`, {
      resource_type: 'video',
      width: 355,
      height: 475,
      crop: 'fill',
      detection: 'adv_face',
    });
    const det = await cloudinary.v2.uploader.upload(poster, { detection: 'adv_face' });
    if (det.info.detection.adv_face.data[0]) {
      res.json({
        age: det.info.detection.adv_face.data[0].attributes.age,
        gender: det.info.detection.adv_face.data[0].attributes.gender,
      });
    }

    // const options = {
    //   creator: req.user.id,
    //   publicId: req.file.public_id,
    //   cloudName: '',
    // };
    //
    // say = await say.create(options);
    // res.json({
    //   ...say,
    // });
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
