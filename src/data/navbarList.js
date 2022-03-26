const navbarList = {
  vietnamese: [
    {
      label: 'Giới thiệu',
      to: {path: '/', hash: '#about'}
      // to: '/#about'
      //có 2 cách ghi đối với thằng hash
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
      label: 'Kinh nghiệm',
      to: {path: '/', hash: '#work'}
    },
    {
      label: 'Kỹ năng',
      to: {path: '/', hash: '#skill'}
    },
    {
      label: 'Dự án',
      to: {path: '/', hash: '#project'}
    },
    {
      label: 'Nguyện vọng',
      to: {path: '/', hash: '#end'}
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
      label: 'Education',
      to: {path: '/english', hash: '#education'}
    },
    {
      label: 'Certificate',
      to: {path: '/english', hash: '#certificate'}
    },
    {
      label: 'Experience',
      to: {path: '/english', hash: '#work'}
    },
    {
      label: 'Skill',
      to: {path: '/english', hash: '#skill'}
    },
    {
      label: 'Project',
      to: {path: '/english', hash: '#project'}
    },
    {
      label: 'Expectation',
      to: {path: '/english', hash: '#end'}
    },
    {
      label: 'Download CV',
      to: {path: '/english', hash: '#end'}
    },
  ]
}

export default navbarList