const express = require('express');
const helloController = require('../controllers/helloController');
const tokenController = require('../controllers/tokenController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/hello', helloController.sayHello);

router.get('/token', tokenController.generateToken);

router.post('/post-body', authMiddleware.authenticate, tokenController.respondPostBody);

module.exports = router;
