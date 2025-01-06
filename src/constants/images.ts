import sfuBg from '@/public/images/sfu.png';
import group1 from '@/public/images/group/group-1.jpg';
import group2 from '@/public/images/group/group-2.jpg';
import group3 from '@/public/images/group/group-3.jpg';
import group4 from '@/public/images/group/group-4.jpg';
import group5 from '@/public/images/group/group-5.jpg';
import group6 from '@/public/images/group/group-6.jpg';
import gallery1 from '@/public/images/gallery/gallery-1.jpg';
import gallery2 from '@/public/images/gallery/gallery-2.jpg';
import gallery3 from '@/public/images/gallery/gallery-3.jpg';
import gallery4 from '@/public/images/gallery/gallery-4.jpg';
import gallery5 from '@/public/images/gallery/gallery-5.jpg';
import bibleStudy from '@/public/images/events/bible_study.jpg';
import wechatQr from '@/public/images/wechat-qr.jpg';

// Team member photos
import simonPhoto from '@/public/images/faces/simon.jpg';
import ruihanPhoto from '@/public/images/faces/Ruihan.jpeg';
import selenaPhoto from '@/public/images/faces/Selena.jpeg';
import justinPhoto from '@/public/images/faces/justin.jpeg';
import yangPhoto from '@/public/images/faces/yangy.jpg';
import songhePhoto from '@/public/images/faces/Songhe.jpeg';
import jonathanPhoto from '@/public/images/faces/Jonathan.jpg';
import pikePhoto from '@/public/images/faces/pika.png';

// Highlight photos
import highlight2019_02 from '@/public/images/highlights/2019/2019-02-11_burnaby_fellowship_highlight_60d5.jpg';
import highlight2019_03 from '@/public/images/highlights/2019/2019-03-09_coquitlam_fellowship_highlight_09f2.jpg';
import highlight2019_04 from '@/public/images/highlights/2019/2019-04-07_burnaby_fellowship_highlight_352a.jpg';
import highlight2019_07a from '@/public/images/highlights/2019/2019-07-06_burnaby_fellowship_highlight_db69.jpg';
import highlight2019_07b from '@/public/images/highlights/2019/2019-07-14_burnaby_fellowship_highlight_0c01.jpg';
import highlight2019_07c from '@/public/images/highlights/2019/2019-07-25_burnaby_fellowship_highlight_7d5f.jpg';
import highlight2019_10 from '@/public/images/highlights/2019/2019-10-14_burnaby_fellowship_highlight_e48f.jpg';
import highlight2019_12 from '@/public/images/highlights/2019/2019-12-22_burnaby_fellowship_highlight_2a87.jpg';
import highlight2021_09 from '@/public/images/highlights/2021/2021-09-25_burnaby_fellowship_highlight_95f1.jpg';
import highlight2022_03 from '@/public/images/highlights/2022/2022-03-19_burnaby_fellowship_highlight_5b67.jpg';
import highlight2022_05a from '@/public/images/highlights/2022/2022-05-21_burnaby_fellowship_highlight_3887.jpg';
import highlight2022_06 from '@/public/images/highlights/2022/2022-06-18_burnaby_fellowship_highlight_a7bc.jpg';
import highlight2022_10a from '@/public/images/highlights/2022/2022-10-10_burnaby_fellowship_highlight_d6b8.jpg';
import highlight2022_10b from '@/public/images/highlights/2022/2022-10-10_richmond_fellowship_highlight_10da.jpg';
import highlight2023_09a from '@/public/images/highlights/2023/2023-09-14_sfu_fellowship_highlight_df0e.jpeg';
import highlight2023_09b from '@/public/images/highlights/2023/2023-09-16_sfu_fellowship_highlight_75f6.jpeg';
import highlight2023_10 from '@/public/images/highlights/2023/2023-10-08_sfu_fellowship_highlight_abba.jpeg';
import highlight2024_11 from '@/public/images/highlights/2024/2024-11-28_burnaby_fellowship_highlight_383e.jpeg';
import highlight2024_12a from '@/public/images/highlights/2024/2024-12-25_burnaby_fellowship_highlight_009a.jpg';
import highlight2024_12b from '@/public/images/highlights/2024/2024-12-25_burnaby_fellowship_highlight_3ec9.jpg';
import highlight2024_12c from '@/public/images/highlights/2024/2024-12-25_burnaby_fellowship_highlight_d17e.jpg';
import highlight2024_12d from '@/public/images/highlights/2024/2024-12-25_burnaby_fellowship_highlight_f7ef.jpg';

export const images = {
  // Main images
  sfuBg,
  fellowshipGroupPhoto: group1,
  fellowshipGroupPhoto2: group2,
  fellowshipGroupPhoto3: group3,
  fellowshipGroupPhoto4: group4,
  fellowshipGroupPhoto5: group5,
  fellowshipGroupPhoto6: group6,
  bibleStudy,
  wechatQrCode: wechatQr,

  // Gallery images
  imgSquare1: gallery1,
  imgSquare2: gallery2,
  imgSquare3: gallery3,
  imgSquare4: gallery4,
  imgSquare5: gallery5,

  // Highlight photos
  highlight2019_02,
  highlight2019_03,
  highlight2019_04,
  highlight2019_07a,
  highlight2019_07b,
  highlight2019_07c,
  highlight2019_10,
  highlight2019_12,
  highlight2021_09,
  highlight2022_03,
  highlight2022_05a,
  highlight2022_06,
  highlight2022_10a,
  highlight2022_10b,
  highlight2023_09a,
  highlight2023_09b,
  highlight2023_10,
  highlight2024_11,
  highlight2024_12a,
  highlight2024_12b,
  highlight2024_12c,
  highlight2024_12d,

  // Team member photos
  simonPhoto,
  ruihanPhoto,
  selenaPhoto,
  justinPhoto,
  yangPhoto,
  songhePhoto,
  jonathanPhoto,
  pikePhoto,
} as const;

export type ImageKey = keyof typeof images;
