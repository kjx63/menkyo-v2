const express = require('express');
const router = express.Router();

/* GET /marks */
router.get('/', function (req, res, next) {
  res.render('marks/index');
});

module.exports = router;
