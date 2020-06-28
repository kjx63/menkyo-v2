const express = require('express');
const router = express.Router();

/* GET /lessons */
router.get('/', function (req, res, next) {
  res.render('lessons/index');
});
/* GET /lessons/lesson-1_1 */
router.get('/lesson-1_1', function (req, res, next) {
  res.render('lessons/lesson-1_1');
});

/* GET /lessons/lesson-1_2 */
router.get('/lesson-1_2', function (req, res, next) {
  res.render('lessons/lesson-1_2');
});

/* GET /lessons/lesson-1_3 */
router.get('/lesson-1_3', function (req, res, next) {
  res.render('lessons/lesson-1_3');
});

/* GET /lessons/lesson-2_1 */
router.get('/lesson-2_1', function (req, res, next) {
  res.render('lessons/lesson-2_1');
});

/* GET /lessons/lesson-2_2 */
router.get('/lesson-2_2', function (req, res, next) {
  res.render('lessons/lesson-2_2');
});
module.exports = router;
