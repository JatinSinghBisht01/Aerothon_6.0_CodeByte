const express = require('express');
const { signup, signin, signout } = require('../controllers/authController');

const router = express.Router();

router.post('/auth/signup', signup);
router.post('/auth/signin', signin);
router.post('/auth/signout', signout);

module.exports = router;