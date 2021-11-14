const router = require('express').Router();
const filesRouter = require('./filesRoute');
const messageRouter = require('./messageRoute');

router.use('/download', filesRouter);
router.use('/message', messageRouter);

module.exports = router;