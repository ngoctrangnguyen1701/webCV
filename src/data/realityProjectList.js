const projectList = {
  vietnamese: [
    {
      imgUrl: 'reality-project-img-1',
      link: '',
      name: 'Web admin nội bộ',
      description: 'Web admin dành cho nội bộ trong công ty (hỗ trợ công việc quản lý của phòng nhân sự, kế toán)',
      technical: 'React, Redux, Redux-saga, Material UI',
      role: 'Layout, lấy dữ liệu ở api hiển thị lên trang web',
      features: [
        'Phân quyền các tác vụ phê duyệt, chỉnh sửa, tạo đơn',
        'Quản lý hồ sơ nhân sự',
        'Quản lý các đơn đặt hàng, vận chuyển vào kho'
      ]  
    },
    {
      imgUrl: 'reality-project-img-2',
      link: 'https://marketplace.herobook.io',
      name: 'Marketplace herobook',
      description: 'Web dùng để trao đổi buôn bán, chuyển nhượng các nhân vật hoặc các vật phẩm trong game NFT',
      technical: 'Vue2, Vuex, Web3',
      role: 'Layout, lấy dữ liệu ở api hiển thị lên trang web, sử dụng web3 tương tác với Metamask và Smart Contract',
      features: [
        'Đăng bán, chọn mua, chuyển nhượng các vật phẩm (hero, box, land)',
        'Hiển thị đầy đủ thông tin, vật phẩm mà người chơi đang sở hữu',
        'Nâng cấp vật phẩm ',
        'Rút nạp tiền vào trong game'
      ]
    },
  ],
  english: [
    {
      imgUrl: 'reality-project-img-1',
      link: '',
      name: 'Web internal admin',
      description: 'Web admin for internal company (support the management of HR department and Accounting department)',
      technical: 'React, Redux, Redux-saga, Material UI',
      role: 'Make layout, get data from api then display on web',
      features: [
        'Permission to action such as approval, edition, creation',
        'The management of profile staffs',
        `The management of order stock's bill, purchase stock's bill, transfer in warehouse...`
      ]
    },
    {
      imgUrl: 'reality-project-img-2',
      link: 'https://marketplace.herobook.io',
      name: 'Marketplace herobook',
      description: 'Web for trade, transfer heroes or items in game NFT',
      technical: 'Vue, Vuex, Web3',
      role: 'Make layout, get data from api and display on webside, use web3 to interract to Metamask and Smart Contract',
      features: [
        'Selling, Buying, Transfer of heroes or items in game NFT',
        'Show full information of player and all of items that player owns',
        'Upgrade items or heroes',
        'Deposit or withdraw coin in game'
      ]
    }
  ]
}

export default projectList