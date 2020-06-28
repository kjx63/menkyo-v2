const express = require('express');
const router = express.Router();

/* GET /schools */
router.get('/', function (req, res, next) {
  res.render('schools/index');
});

module.exports = router;
