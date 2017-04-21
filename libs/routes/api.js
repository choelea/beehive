var express = require('express');
var router = express.Router();
var log = require('../log');
/* GET collect listing. */
router.get('/collect.gif', function (req, res) {
    collectData(req);
    var buf = new Buffer(43);
    buf.write("R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", "base64");
    res.setHeader('Content-Type', 'image/gif');
    res.setHeader('Cache-Control', 'private, no-cache, no-cache=Set-Cookie, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.status(200).send(buf);
});

function collectData(req){
    log.info(req.query);
}
module.exports = router;
