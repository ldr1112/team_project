const express = require('express');
const { Router } = require('express');
const logger = require('../lib/logger');
const profileRouter = require('./profile');
const postRouter = require('./post');
const boardRouter = require('./board');
const commentRouter = require('./comment');
const imageRouter = require('./image');
const visionRouter = require('./vision');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// logTest
router.get('/log-test', (req, res, next) => {
  logger.error('This message is error');
  logger.warn('This message is warn');
  logger.info('This message is info');
  logger.verbose('This message is verbose');
  logger.debug('This message is debug');
  logger.silly('This message is silly');

  res.send('log test');
});

// profilel
router.use('/profile', profileRouter);
router.use('/post', postRouter);
router.use('/board', boardRouter);
router.use('/comment', commentRouter);
router.use('/image', imageRouter);
router.use('/vision', visionRouter);

module.exports = router;
