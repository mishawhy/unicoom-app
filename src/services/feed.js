import axios from 'axios';

export async function getFeed() {
  const result = await axios.get(`${process.env.VUE_APP_ENDPOINT}api/feed`);
  console.log(result.data.feed);
  return result.data.feed;
}

//
// export async function getFeed() {
//   return [
//     {
//       cloud: 'hukuvq2x5',
//       publicId: '62531025_2339052489754701_3031537748427005020_n_s2nf1b',
//       telegram: 'yefimets',
//     },
//     {
//       cloud: 'hukuvq2x5',
//       publicId: '57608605_2293918834163766_3020188508832326667_n_ykyrg5',
//       telegram: 'yefimets',
//     },
//     {
//       cloud: 'hukuvq2x5',
//       publicId: '62599099_204900680475038_5033970712450587782_n_hu3key',
//       telegram: 'yefimets',
//     },
//     {
//       cloud: 'hukuvq2x5',
//       publicId: '62458030_2060933817534161_5317953120318981005_n_zxwxtr',
//       telegram: 'yefimets',
//     },
//     //   src:
//     //     'http://res.cloudinary.com/drk41czr3/video/upload/c_fill,h_630,q_70,w_355/a9iy6zydpcvyqlzx5fzz.mov',
//     //   poster:
//     //     'http://res.cloudinary.com/drk41czr3/video/upload/c_fill,h_630,w_355/a9iy6zydpcvyqlzx5fzz.jpg',
//     // },
//     // {
//     //   src:
//     //     'http://res.cloudinary.com/drk41czr3/video/upload/c_fill,h_475,q_60,w_355/teseciep1nyaqzkyuutj.mov',
//     //   poster:
//     //     'http://res.cloudinary.com/drk41czr3/video/upload/c_fill,h_475,w_355/teseciep1nyaqzkyuutj.jpg',
//     // },
//     // {
//     //   src:
//     //     'http://res.cloudinary.com/drk41czr3/video/upload/c_fill,h_475,q_60,w_355/xjhvwa584odsgptoohud.mov',
//     //   poster:
//     //     'http://res.cloudinary.com/drk41czr3/video/upload/c_fill,h_475,w_355/xjhvwa584odsgptoohud.jpg',
//     // },
//   ];
// }
