const logger = require('../lib/logger');
const profileDao = require('../dao/profileDao');
// const hashUtil = require('../lib/hashUtil');

const service = {
  // user 입력
  async reg(params) {
    let inserted = null;

    // 1. 비밀번호 암호화
    try {
      inserted = await profileDao.insert(params);
      logger.debug(`(profileService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(profileService.reg) ${err.toString()}`);
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
      result = await profileDao.selectList(params);
      logger.debug(`(profileService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(profileService.list) ${err.toString()}`);
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
      result = await profileDao.selectInfo(params);
      logger.debug(`(profileService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(profileService.info) ${err.toString()}`);
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
      result = await profileDao.update(params);
      logger.debug(`(profileService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(profileService.edit) ${err.toString()}`);
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
      result = await profileDao.delete(params);
      logger.debug(`(profileService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(profileService.delete) ${err.toString()}`);
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
