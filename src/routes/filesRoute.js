const router = require('express').Router();
const path = require('path')

router.get('/', (req, res) => {
    res.setHeader("content-type", "application/json")
    res.download(path.resolve("./src/files","cv.pdf"), (err) => {
        //error case
    });
});

module.exports = router