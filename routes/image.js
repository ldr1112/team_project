const express = require('express');

const router = express.Router();
const multer = require('multer');
const path = require('path');
const logger = require('../lib/logger');
const imageService = require('../service/imageService');

const storage = multer.diskStorage({ // 조건 추가 가능
  destination: (req, file, cb) => { // if문으로 파일형식에 따라 저장폴더바꿀 수 있음
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    const extension = path.extname(file.originalname);
    const basename = path.basename(file.originalname, extension);
    cb(null, `${basename}-${Date.now()}${extension}`);
    // cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage }); // {프로퍼티이름: 프로퍼티값}

// file upload
// app.set('views', './views_file');

// router.route('/image')
//   .get((req, res) => {
//     res.sendFile(path.resolve(__dirname, '..', 'images', 'background.jpg'));
//   })
//   .post(upload.single('uploadfile'), (req, res, next) => {
//     res.send(req.file);
//   });
// router.post('/uploads', upload.single('userfile'), (req, res) => { // 파일이름 'userfile'
//   console.log(req.file);
//   res.send(`Uploaded : ${req.file}`);
// });
// 등록;
router.post('/', upload.single('userfile'), async (req, res) => {
  try {
    const params = {
      postId: req.body.postId,
      imageId: req.body.imageId,
      filename: req.file.filename,
      mimetype: req.file.mimetype,
      path: req.file.path,
      size: req.file.size,
    };
    logger.info(`(image.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.filename) {
      const err = new Error('Not allowed null (imageId)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString });
    }

    // 비즈니스 로직 호출
    const result = await imageService.reg(params);
    logger.info(`(image.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(params);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});
// 리스트 조회
router.get('/', async (req, res) => {
  try {
    const params = {
      postId: req.body.postId,
      imageId: req.body.imageId,
      filename: req.body.filename,
      mimetype: req.body.mimetype,
      path: req.body.path,
      size: req.body.size,
    };
    logger.info(`(image.list.params) ${JSON.stringify(params)}`);

    const result = await imageService.list(params);
    logger.info(`(image.list.result) ${JSON.stringify(result)}`);

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
      imageId: req.params.id,
    };
    logger.info(`(image.info.params) ${JSON.stringify(params)}`);

    const result = await imageService.info(params);
    logger.info(`(image.info.result) ${JSON.stringify(result)}`);

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
      imageId: req.body.imageId,
      subId: req.body.subId,
      imageName: req.body.imageName,
      vedeoNamae: req.body.vedeoNamae,
    };
    logger.info(`(image.update.params) ${JSON.stringify(params)}`);

    const result = await imageService.edit(params);
    logger.info(`(image.update.result) ${JSON.stringify(result)}`);

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
      imageId: req.params.imageId,
    };
    logger.info(`(image.delete.params) ${JSON.stringify(params)}`);

    const result = await imageService.delete(params);
    logger.info(`(image.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
