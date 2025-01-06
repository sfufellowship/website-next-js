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

// Type for image keys
export type ImageKey = keyof typeof images;
