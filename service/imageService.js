const logger = require('../lib/logger');
const imageDao = require('../dao/imageDao');

const service = {
  // image 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await imageDao.insert(params);
      logger.debug(`(imageService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(imageService.reg) ${err.toString()}`);
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
      result = await imageDao.selectList(params);
      logger.debug(`(imageService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(imageService.list) ${err.toString()}`);
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
      result = await imageDao.selectDao(params);
      logger.debug(`(imageService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(imageService.info) ${err.toString()}`);
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
      result = await imageDao.update(params);
      logger.debug(`(imageService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(imageService.edit) ${err.toString()}`);
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
      result = await imageDao.delete(params);
      logger.debug(`(imageService.delte) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(imageService.delete) ${err.toString()}`);
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
