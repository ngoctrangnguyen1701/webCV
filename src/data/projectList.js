const imgUrlList = [
  '/images/project-img1.jpg',
  '/images/project-img2.jpg',
  '/images/project-img3.jpg',
  '/images/project-img4.jpg',
]

const webUrlList = [
  'https://ngoctrangnguyen1701.github.io/build-project-eshopper',
  '',
  'https://ngoctrangnguyen1701.github.io/project-violin-shop',
  'https://game-caro-73268.firebaseapp.com/',
]

const sourceCodeUrlList = [
  'https://github.com/ngoctrangnguyen1701/project-eshopper',
  'https://github.com/ngoctrangnguyen1701/server-side-rendering-project-store',
  'https://github.com/ngoctrangnguyen1701/project-violin-shop',
  'https://github.com/ngoctrangnguyen1701/game-caro',
]

const nameAndDescription = {
  vietnamese: [
    {
      name: 'Web bán hàng',
      description: 'Xây dựng bằng React, Redux, Saga',
    },
    {
      name: 'Web bán hàng điện tử',
      description: 'Server side rendering xây dựng bằng NodeJS, MongoDb, Jquery',
    },
    {
      name: 'Violin shop',
      description: 'Web tĩnh HTML, CSS, Javascript, Bootstrap, Responsive',
    },
    {
      name: 'Game caro online',
      description: 'Xây dựng bằng React, Nodejs, MongoDb, Socket.io ',
    },
  ],
  english: [
    {
      name: 'Sales web',
      description: 'Built by React, Redux, Saga',
    },
    {
      name: 'Electronic sales web',
      description: 'Server side rendering built by NodeJS, MongoDb, Jquery',
    },
    {
      name: 'Violin shop',
      description: 'Static Web with HTML, CSS, Javascript, Bootstrap, Responsive',
    },
    {
      name: 'Game caro online',
      description: 'Built by bằng React, Nodejs, MongoDb, Socket.io',
    },
  ]
}

const createArr = lang => {
  const newArr = []
  for(let i = 0; i < imgUrlList.length; i++) {
    newArr.push({
      imgUrl: imgUrlList[i],
      name: nameAndDescription[lang][i].name,
      description: nameAndDescription[lang][i].description,
      webUrl: webUrlList[i],
      sourceCodeUrl: sourceCodeUrlList[i],
    })
  }
  return newArr
}

const projectList = {
  vietnamese: createArr('vietnamese'),
  english: createArr('english'),
}

export default projectList