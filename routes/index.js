let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => { 
  res.render('index', { title: "Test", status: 'Log out'})
});

module.exports = router