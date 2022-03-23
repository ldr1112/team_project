const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const commentService = require('../service/commentService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      postId: req.body.postId,
      commentId: req.body.commentId,
      commentext: req.body.commentext,
      subId: req.body.subId,
      userId: req.body.userId,
    };
    logger.info(`(comment.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.name) {
      const err = new Error('Not allowed null (name)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await commentService.reg(params);
    logger.info(`(comment.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString });
  }
});

// 리스트 조회
router.get('/', async (req, res) => {
  try {
    const params = {
      name: req.query.name,
    };
    logger.info('(comment.list.params) $JSON.stringfy(params)');

    const result = await commentService.list(params);
    logger.info(`(comment.list.result) ${JSON.stringify(result)}`);

    // 최종응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 상세정보 조회
router.get('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(comment.info.params) ${JSON.stringify(params)}`);

    const result = await commentService.info(params);
    logger.info(`(comment.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 수정
router.put('/:id', async (req, res) => {
  try {
    const params = {
      commentId: req.body.commentId,
      commentext: req.body.commentext,
      subId: req.body.subId,
      userId: req.body.userId,
    };
    logger.info(`(comment.update.params) ${JSON.stringify(params)}`);

    const result = await commentService.edit(params);
    logger.info(`(comment.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString });
  }
});

// 삭제
router.delete('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(comment.delete.params) ${JSON.stringify(params)}`);

    const result = await commentService.delete(params);
    logger.info(`(comment.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
