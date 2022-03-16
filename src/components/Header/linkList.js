const linkList = {
  vietnamese: [
    {
      link: '#about',
      label: 'Giới thiệu',
      to: {path: '/', hash: '#about'}
      // to: '/#about'
      //có 2 cách ghi đối với thằng hash
    },
    {
      link: '#education',
      label: 'Học vấn',
      to: {path: '/', hash: '#education'}
    },
    {
      link: '#certificate',
      label: 'Chứng chỉ',
      to: {path: '/', hash: '#certificate'}
    },
    {
      link: '#work',
      label: 'Kinh nghiệm',
      to: {path: '/', hash: '#work'}
    },
    {
      link: '#skill',
      label: 'Kỹ năng',
      to: {path: '/', hash: '#skill'}
    },
    {
      link: '#project',
      label: 'Dự án',
      to: {path: '/', hash: '#project'}
    },
    {
      link: '#end',
      label: 'Nguyện vọng',
      to: {path: '/', hash: '#end'}
    },
    {
      link: '#end',
      label: 'Download CV',
      to: {path: '/', hash: '#end'}
    },
  ]  
}

export default linkList