const logger = require('../lib/logger');
const commentDao = require('../dao/commentDao');

const service = {
  // comment 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await commentDao.insert(params);
      logger.debug(`(commentService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(commentService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },
  // selectList
  async list(params) {
    let result = null;

    try {
      result = await commentDao.selectList(params);
      logger.debug(`(commentService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.debug(`(commentService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // selectInfo
  async info(params) {
    let result = null;

    try {
      result = await commentDao.selectInfo(params);
      logger.debug(`(commentService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(commentService.info) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // delete
  async delete(params) {
    let result = null;

    try {
      result = await commentDao.delete(params);
      logger.debug(`(commentService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(commentService.delete) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
    return new Promise((resolve) => {
      resolve(result);
    });
  },
};

module.exports = service;
