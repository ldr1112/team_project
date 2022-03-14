const logger = require('../lib/logger');
const postDao = require('../dao/postDao');

const service = {
  // post 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await postDao.insert(params);
      logger.debug(`(postService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(postService.reg) ${err.toString()}`);
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
      result = await postDao.selectList(params);
      logger.debug(`(postService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(postService.list) ${err.toString()}`);
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
      result = await postDao.selectInfo(params);
      logger.debug(`(postService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(postService.info) ${err.toString()}`);
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
      result = await postDao.update(params);
      logger.debug(`(postService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(postService.edit) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // delsete
  async delete(params) {
    let result = null;

    try {
      result = await postDao.delete(params);
      logger.debug(`(postService.delete) ${JSON.stringify()}`);
    } catch (err) {
      logger.error(`(postService.delete) ${err.toString()}`);
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
