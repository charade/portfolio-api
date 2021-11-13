const router = require('express').Router();
const filesRouter = require('./filesRoute');

router.use('/download', filesRouter);

module.exports = router;