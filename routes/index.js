var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var userAgent = req.headers['user-agent'] || 'none';
    if (req.accepts('html')) {
        res.render('index', {userAgent});
    } else {
        res.type('text');
        res.send(userAgent);
    }
});

module.exports = router;
