const express = require('express');
const router = express.Router();

router.use('/api/users', require('./api/user'));
router.use('/api/movies', require('./api/movie'));

module.exports = router;


