const imgUrlList = [
  'project-img1',
  'project-img2',
  'project-img3',
  'project-img4',
  'project-img5',
]

const webUrlList = [
  'https://ngoctrangnguyen1701.github.io/build-project-eshopper',
  '',
  'https://ngoctrangnguyen1701.github.io/project-violin-shop',
  'https://game-caro-73268.firebaseapp.com/',
  'https://ngoctrangnguyen1701.github.io/acttack-monster/',
]

const sourceCodeUrlList = [
  'https://github.com/ngoctrangnguyen1701/project-eshopper',
  'https://github.com/ngoctrangnguyen1701/server-side-rendering-project-store',
  'https://github.com/ngoctrangnguyen1701/project-violin-shop',
  'https://github.com/ngoctrangnguyen1701/game-caro',
  'https://github.com/ngoctrangnguyen1701/acttack-monster',
]

const nameAndDescription = {
  vietnamese: [
    {
      name: 'E-Shopper',
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
      description: 'Xây dựng bằng React, Nodejs, MongoDb, Socket.io',
    },
    {
      name: 'Mini game - Attack Monster',
      description: 'Xây dựng bằng file script của Vue',
    },
  ],
  english: [
    {
      name: 'E-Shopper',
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
    {
      name: 'Mini game - Attack Monster',
      description: `Built by Vue's file script`,
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