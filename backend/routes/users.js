const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/api', function(req, res, next) {
  res.send('RMUTL TEST API');
});

module.exports = router;