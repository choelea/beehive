const express = require('express');
const router = express.Router();
const log = require('./beelogger');
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
router.get("/collect", function (req, res) {
    collectData(req);
    var buf = new Buffer(43);
    buf.write("R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", "base64");
    res.setHeader('Content-Type', 'image/gif');
    res.setHeader('Cache-Control', 'private, no-cache, no-cache=Set-Cookie, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.status(200).send(buf);
});
function collectData(req) {
    let data = req.query;
    data.cid = req.cookies.cid;
    data.una = req.cookies.una;
    data.uid = req.cookies.uid;
    data.cip = req.headers["X-FORWARDED-FOR"];
    data['@timestamp'] = new Date().toISOString();
    log.info(data);
}
module.exports = router;
