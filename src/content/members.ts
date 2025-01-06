import { images } from '@/src/constants/images';

export const members = {
  zh: {
    title: '团契成员',
    list: [
      {
        name: 'Simon Chen',
        role: '团契辅导员',
        description: 'SFU CS Master毕业',
        image: images.simonPhoto,
      },
      {
        name: 'Jonathan Yang',
        role: '团契主席',
        description: 'SFU Data Science在读',
        image: images.jonathanPhoto,
      },
      {
        name: 'Ruihan Zhang',
        role: '团契副主席',
        description: 'SFU Big Data Master毕业',
        image: images.ruihanPhoto,
      },
      {
        name: 'Selena Song',
        role: '团契副主席',
        description: 'SFU Business毕业',
        image: images.selenaPhoto,
      },
      {
        name: 'Yang Yang',
        role: '团契同工',
        description: 'SFU CS毕业',
        image: images.yangPhoto,
      },
      {
        name: 'Kristen Gao',
        role: '团契同工',
        description: 'SFU Statistics在读',
        image: images.pikePhoto,
      },
      {
        name: 'Qian Li',
        role: '团契同工',
        description: 'SFU Business在读',
        image: images.pikePhoto,
      },
      {
        name: 'Lydia Lu',
        role: '团契同工',
        description: 'SFU Business毕业',
        image: images.pikePhoto,
      },
      {
        name: 'Ray Lei',
        role: '团契同工',
        description: 'SFU Engineer Master毕业',
        image: images.songhePhoto,
      },
    ],
  },
  en: {
    title: 'Fellowship Members',
    list: [
      {
        name: 'Simon Chen',
        role: 'Fellowship Counselor',
        description: 'SFU CS Master Graduate',
        image: images.simonPhoto,
      },
      {
        name: 'Jonathan Yang',
        role: 'Fellowship President',
        description: 'SFU Data Science Student',
        image: images.jonathanPhoto,
      },
      {
        name: 'Ruihan Zhang',
        role: 'Fellowship Vice President',
        description: 'SFU Big Data Master Graduate',
        image: images.ruihanPhoto,
      },
      {
        name: 'Selena Song',
        role: 'Fellowship Vice President',
        description: 'SFU Business Graduate',
        image: images.selenaPhoto,
      },
      {
        name: 'Yang Yang',
        role: 'Fellowship Staff',
        description: 'SFU CS Graduate',
        image: images.yangPhoto,
      },
      {
        name: 'Kristen Gao',
        role: 'Fellowship Staff',
        description: 'SFU Statistics Student',
        image: images.pikePhoto,
      },
      {
        name: 'Qian Li',
        role: 'Fellowship Staff',
        description: 'SFU Business Student',
        image: images.pikePhoto,
      },
      {
        name: 'Lydia Lu',
        role: 'Fellowship Staff',
        description: 'SFU Business Graduate',
        image: images.pikePhoto,
      },
      {
        name: 'Ray Lei',
        role: 'Fellowship Staff',
        description: 'SFU Engineer Master Graduate',
        image: images.songhePhoto,
      },
    ],
  },
} as const;
