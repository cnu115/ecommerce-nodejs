const express = require('express');
const router = express.Router();
const {view} = require('../controllers/UserController');

router.route('/').get(view);

module.exports = router;