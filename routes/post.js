const express = require('express');
const { param } = require('.');

const router = express.Router();
const logger = require('../lib/logger');
const postService = require('../service/postService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      subnum: req.body.subnum,
      post: req.body.post,
      subject: req.body.subject,
      userid: req.body.userid,
      text: req.body.text,
      comment: req.body.comment,
    };
    logger.info(`(post.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.subnum) {
      const err = new Error('Not allowed null (subnum)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await postService.reg(params);
    logger.info(`(post.reg.result) ${JSON.stringify(result)}`);

    // 최종응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString });
  }
});
// 리스트조회
router.get('/', async (req, res) => {
  try {
    const params = {

      postId: req.body.postId,
      subnum: req.body.subnum,
      post: req.body.post,
      subject: req.body.subject,
      userid: req.body.userid,
      text: req.body.text,
      comment: req.body.comment,

    };
    logger.info(`(post.list.params) ${JSON.stringify(params)}`);

    const result = await postService.list(params);
    logger.info(`(post.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
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
    logger.info(`(post.info.params) ${JSON.stringify(params)}`);
    const result = await postService.info(params);
    logger.info(`(post.info.result) ${JSON.stringify(result)}`);

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
      subnum: req.body.subnum,
      post: req.body.post,
      subject: req.body.subject,
      userid: req.body.userid,
      text: req.body.text,
      comment: req.body.comment,
    };
    logger.info(`(post.update.params) ${JSON.stringify(params)}`);

    const result = await postService.edit(params);
    logger.info(`(post.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 삭제
router.delete('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(post.delete.params) ${JSON.stringify(params)}`);

    const result = await postService.delete(params);
    logger.info(`(post.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString });
  }
});

module.exports = router;
