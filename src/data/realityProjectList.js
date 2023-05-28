const projectList = {
  vietnamese: [
    {
      imgUrl: 'https://img.freepik.com/free-vector/goods-shipment-panoramas_1284-34263.jpg?w=996&t=st=1684853711~exp=1684854311~hmac=01a69d5255841e9ea6a52770756f92bcc2123965a00f1c92d1da631bbc920771',
      startTime: '11/2022',
      endTime: 'nay',
      link: '',
      name: 'Web quản lý điều độ xe',
      description: 'Web quản lý dành cho nội bộ trong công ty chuyên về logistics(hỗ trợ công việc quản lý của các phòng ban như thư ký, điều độ xe, vận chuyển đơn hàng)',
      technical: 'Vue, Vuex',
      role: 'Frontend',
      features: [
        'Phân quyền các tác vụ phê duyệt, chỉnh sửa, tạo đơn',
        'Quản lý theo dõi trạng thái của đơn hàng',
        'Quản lý điều độ xe, chia xe theo từng năng lực xe',
        'Quản lý bảo trì, bảo dưỡng, sửa chữa cho xe',
        'Tính lương, các khoản phụ cấp cho tài xế'
      ]  
    },
    {
      imgUrl: 'https://img.freepik.com/free-vector/business-team-putting-motion-cogwheels_1262-19219.jpg?w=1380&t=st=1685277133~exp=1685277733~hmac=f5e1bcee829ad255475c51b65af7a832d5cc0d7147d32a40109ee5e69b9cdc8b',
      startTime: '10/2022',
      endTime: 'nay',
      link: '',
      name: 'Web admin cho chuỗi dự án của công ty',
      description: 'Web quản lý các sản phẩm nằm trong chuỗi dự án của công ty',
      technical: 'Vue2, Vuex',
      role: 'Frontend',
      features: [
        'Phân quyền các menu chức năng theo từng tài khoản đăng nhập',
        'Cài đặt các tính năng thông qua web cho các sản phẩm',
        'Theo dõi tình trạng các sản phẩm',
      ]
    },
    {
      imgUrl: 'reality-project-img-2',
      startTime: '04/2022',
      endTime: '07/2022',
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
    {
      imgUrl: 'reality-project-img-1',
      startTime: '11/2021',
      endTime: '12/2021',
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
  ],
  english: [
    {
      imgUrl: 'https://img.freepik.com/free-vector/goods-shipment-panoramas_1284-34263.jpg?w=996&t=st=1684853711~exp=1684854311~hmac=01a69d5255841e9ea6a52770756f92bcc2123965a00f1c92d1da631bbc920771',
      startTime: 'Nov 2022',
      endTime: 'Now',
      link: '',
      name: 'Web management and moderation vehicle',
      description: 'Web admin for internal company that specializing in logistics(support the management of  department such as secretary, vehicle moderation , order delivery)',
      technical: 'Vue, Vuex',
      role: 'Frontend',
      features: [
        'Permission to action such as approval, edition, creation',
        'Manage  tracking order status',
        'Manage moderation vehicle, vehicle division according to qualification of vehicle',
        'Manage maintainance of vehicle',
      ]  
    },
    {
      imgUrl: 'https://img.freepik.com/free-vector/business-team-putting-motion-cogwheels_1262-19219.jpg?w=1380&t=st=1685277133~exp=1685277733~hmac=f5e1bcee829ad255475c51b65af7a832d5cc0d7147d32a40109ee5e69b9cdc8b',
      startTime: '10/2022',
      endTime: 'now',
      link: '',
      name: "Web admin for the company's project chain",
      description: "Web to manage products that in the company's project chain",
      technical: 'Vue2, Vuex',
      role: 'Frontend',
      features: [
        'Permission by user account',
        'Setting functions of product through web',
        'Follow status of product',
      ]
    },
    {
      imgUrl: 'reality-project-img-2',
      startTime: 'Apr 2022',
      endTime: 'Jul 2022',
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
    },
    {
      imgUrl: 'reality-project-img-1',
      startTime: 'Nov 2021',
      endTime: 'Dec 2021',
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
  ]
}

export default projectList