const express = require('express');
const { predict } = require('../controllers/faultPredController');
const { upload } = require('../middleware/multerConfig');
const router = express.Router();

router.post('/predict', upload.single('image'), predict);

module.exports = router;