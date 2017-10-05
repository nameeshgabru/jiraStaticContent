var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end(JSON.stringify([
        {
            'S.No': '1',
            'Use Case Name': 'Cylance',
            'Ticketing Criteria': 'HOST+HASH',
            'Date': '2017-09-04'
        },
        {
            'S.No': '2',
            'Use Case Name': 'CrowdStrike',
            'Ticketing Criteria': 'HOST+HASH',
            'Date': '2017-09-04'
        },
    ]))
});

module.exports = router;
