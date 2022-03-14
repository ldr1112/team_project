const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const visionService = require('../service/visionService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      visionId: req.body.visionId,
      subId: req.body.subId,
      visionName: req.body.visionName,
    };
    logger.info(`(vision.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.name) {
      const err = new Error('Not allowed null (name)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }
    // 비즈니스 로직 호출
    const result = await visionService.reg(params);
    logger.info(`(vision.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});
// 리스트 조회
router.get('/', async (req, res) => {
  try {
    const params = {
      visionId: req.query.visionId,
    };
    logger.info(`(vision.list.params) ${JSON.stringify(params)}`);

    const result = await visionService.list(params);
    logger.info(`(vision.list.result) ${JSON.stringify(result)}`);

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
      visionId: req.params.visionId,
    };
    logger.info(`(vision.info.params) ${JSON.stringify(params)}`);

    const result = await visionService.info(params);
    logger.info(`(vision.info.result) ${JSON.stringify(result)}`);

    // 최종응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 수정
router.put('/:id', async (req, res) => {
  try {
    const params = {
      visionId: req.body.visionId,
      subId: req.body.subId,
      visionName: req.body.visionName,
    };
    logger.info(`(vision.update.params) ${JSON.stringify(params)}`);

    const result = await visionService.edit(params);
    logger.info(`(vision.update.result) ${JSON.stringify(result)}`);

    // 최종응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 삭제
router.delete('/:id', async (req, res) => {
  try {
    const params = {
      visionId: req.params.id,
    };
    logger.info(`(vision.delete.params) ${JSON.stringify(params)}`);

    const result = await visionService.delete(params);
    logger.info(`(vision.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});
module.exports = router;
