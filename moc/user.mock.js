
module.exports = {
  'POST /api/login': (req, res) => {
    let { username, password } = req.body;
    if (username === 'admin' && password === 'admin!') {
      return res.status(200).json({
        message: "Login successful!",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        data: {
          nikename: 'Hello App',
        },
        // listdata: [
        //   { title: '一' },
        //   { title: '二' },
        //   { title: '三' },
        //   { title: '四' },
        //   { title: '五' },
        //   { title: '六' },
        //   { title: '七' },
        //   { title: '七' },
        // ]
      });
    }
    res.status(401).json({
      message: "username or password is error.",
    });
  },
  'POST /api/logout': {
    message: 'Logout successful!',
  },
  'GET /api/auth': {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    // token: '',
  },
  'POST /api/shop': (req, res) => {
    // let { username, password } = req.body;
    // if (username === 'admin' && password === 'admin!') {
      return res.status(200).json({
        // message: "Login successful!",
        // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        // data: {
        //   nikename: 'Hello App',
        // },
        listdata: [
          { title: '一' },
          { title: '二' },
          { title: '三' },
          { title: '四' },
          { title: '五' },
          { title: '六' },
          { title: '七' },
          { title: '七' },
        ]
      });
    // }
    // res.status(401).json({
    //   message: "username or password is error.",
    // });
  },
}