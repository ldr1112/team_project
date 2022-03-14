const express = require('express');
const { param } = require('.');

const router = express.Router();
const logger = require('../lib/logger');
const profileService = require('../service/profileService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      userid: req.body.userid,
      password: req.body.password,
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
    };
    logger.info(`(profile.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.name || !params.userid || !params.password) {
      const err = new Error('Not allowed null (name, userid, password)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await profileService.reg(params);
    logger.info(`(profile.reg.result) ${JSON.stringify(result)}`);

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
      userid: req.body.userid,
      password: req.body.password,
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
    };
    logger.info(`(profile.list.params) ${JSON.stringify(params)}`);

    const result = await profileService.list(params);
    logger.info(`(profile.list.result) ${JSON.stringify(result)}`);

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
      userid: req.body.userid,
      password: req.body.password,
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
    };
    logger.info(`(profile.info.params) ${JSON.stringify(params)}`);

    const result = await profileService.info(params);
    logger.info(`(profile.info.result) ${JSON.stringify(result)}`);

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
      userid: req.body.userid,
      password: req.body.password,
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
    };
    logger.info(`(profile.update.params) ${JSON.stringfy(params)}`);

    const result = await profileService.edit(params);
    logger.info(`(profile.update.result) ${JSON.stringify(result)}`);

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
      userid: req.body.userid,
      password: req.body.password,
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
    };
    logger.info(`(profile.delete.params) ${JSON.stringify(params)}`);

    const result = await profileService.delete(params);
    logger.info(`(profile.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
