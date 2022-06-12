const navbarList = {
  vietnamese: [
    {
      label: 'Giới thiệu',
      to: {path: '/', hash: '#about'}
      // to: '/#about'
      //có 2 cách ghi đối với thằng hash
    },
    {
      label: 'Dự án',
      to: {path: '/', hash: '#project'}
    },
    {
      label: 'Kinh nghiệm',
      to: {path: '/', hash: '#experience'}
    },
    {
      label: 'Kỹ năng',
      to: {path: '/', hash: '#skill'}
    },
    {
      label: 'Học vấn',
      to: {path: '/', hash: '#education'}
    },
    {
      label: 'Chứng chỉ',
      to: {path: '/', hash: '#certificate'}
    },
    {
      label: 'Download CV',
      to: {path: '/', hash: '#end'}
    },
  ],
  english: [
    {
      label: 'About',
      to: {path: '/english', hash: '#about'}
    },
    {
      label: 'Project',
      to: {path: '/english', hash: '#project'}
    },
    {
      label: 'Experience',
      to: {path: '/english', hash: '#experience'}
    },
    {
      label: 'Skill',
      to: {path: '/english', hash: '#skill'}
    },
    {
      label: 'Education',
      to: {path: '/english', hash: '#education'}
    },
    {
      label: 'Certificate',
      to: {path: '/english', hash: '#certificate'}
    },
    {
      label: 'Download CV',
      to: {path: '/english', hash: '#end'}
    },
  ]
}

export default navbarList