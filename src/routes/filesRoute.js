const router = require('express').Router();
const path = require('path')

router.get('/', (req, res) => {
    res.setHeader("content-type", "application/pdf")
    res.download(path.resolve("./src/files","cv.pdf"), (err) => {
        !res.headersSent && res.status(500)
    });
});

module.exports = router