const logger = require('../lib/logger');
const visionDao = require('../dao/visionDao');

const service = {
  // vision 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await visionDao.insert(params);
      logger.debug(`(visionService.reg) ${JSON.toString()}`);
    } catch (err) {
      logger.error(`(visionService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },
  // selectLis
  async list(params) {
    let result = null;

    try {
      result = await visionDao.selectList(params);
      logger.debug(`(visionService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(visionService.list) ${err.toString()}`);
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
      result = await visionDao.selectInfo(params);
      logger.debug(`(visionService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(visionService.info) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // update
  async edit(params) {
    let result = null;

    try {
      result = await visionDao.update(params);
      logger.debug(`(visionService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(visionService.edit) ${err.toString()}`);
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
      result = await visionDao.delete(params);
      logger.debug(`(visionService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(visionService.delete) ${err.toString()}`);
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
