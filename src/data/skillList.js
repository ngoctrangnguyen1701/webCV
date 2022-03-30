const sameProperty = [
  {
    text: 'HTML, CSS, SCSS',
    rating: 4.5,
  },
  {
    text: 'Bootstrap, Web responsive, Animation',
    rating: 4,
  },
  {
    text: 'NodeJS, MongoDB',
    rating: 3.5,
  },
  {
    text: 'ReactJS, Redux, Saga',
    rating: 4,
  },
  {
    text: 'VueJS, Vuex',
    rating: 3,
  },
  {
    text: 'Socket.io',
    rating: 4,
  },
]

const skillList = {
  vietnamese: [
    ...sameProperty,
    {
      text: 'Đọc tài liệu tiếng Anh',
      rating: 3,
    },
  ],
  english: [
    ...sameProperty,
    {
      text: 'Reading document in English',
      rating: 3,
    },
  ]
}

export default skillList