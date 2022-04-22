let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => { 
  res.render('index', { title: "Home Page", status: 'Log out', style:'index.css'})
});

router.get('/message', (req, res, next) => { 
  res.render('message', { title: "Message Page", status: '', style: 'message.css'})
});

module.exports = router