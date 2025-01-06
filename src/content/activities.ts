import { images } from '@/src/constants/images';

export const activities = {
  zh: {
    title: '活动介绍',
    items: [
      {
        title: '感恩节活动',
        description: '感恩节晚宴，大家一起吃火鸡，分享感恩的故事',
        type: '感恩节',
        image: images.imgSquare1,
      },
      {
        title: '欢迎新生',
        description: '在SFU校园内，每个学期开学都会有活动，让大家相互认识，一起走进信仰',
        type: '开学活动',
        image: images.imgSquare3,
      },
      {
        title: '查经学习',
        description: '学期中会有大家一起学圣经的活动',
        type: '查经',
        image: images.bibleStudy,
      },
      {
        title: '户外爬山',
        description: '夏天户外活动包括爬山，烧烤，海边活动等',
        type: '户外活动',
        image: images.imgSquare4,
      },
      {
        title: '音乐布道会',
        description: '每年都会有精彩的音乐会，让大家感受信仰带来新的力量',
        type: '音乐会',
        image: images.imgSquare5,
      },
      {
        title: '篮球赛',
        description: '在大温哥华圣道堂举办的篮球友谊赛，增进团契间的友谊',
        type: '室内活动',
        image: images.imgSquare2,
      },
    ],
  },
  en: {
    title: 'Activities',
    items: [
      {
        title: 'Thanksgiving Celebration',
        description: 'Thanksgiving dinner with turkey and sharing gratitude stories',
        type: 'Thanksgiving',
        image: images.imgSquare1,
      },
      {
        title: 'Welcome Event',
        description:
          'Welcome events at SFU campus at the beginning of each semester to help students connect and explore faith together',
        type: 'Welcome Event',
        image: images.imgSquare3,
      },
      {
        title: 'Bible Study',
        description: 'Regular Bible study sessions during the semester',
        type: 'Bible Study',
        image: images.bibleStudy,
      },
      {
        title: 'Hiking',
        description: 'Summer outdoor activities including hiking, BBQ, and beach activities',
        type: 'Outdoor Activity',
        image: images.imgSquare4,
      },
      {
        title: 'Gospel Concert',
        description: 'Annual concerts that bring new strength through faith',
        type: 'Concert',
        image: images.imgSquare5,
      },
      {
        title: 'Basketball Game',
        description: 'Friendly basketball matches at Church',
        type: 'Indoor Activity',
        image: images.imgSquare2,
      },
    ],
  },
} as const;
