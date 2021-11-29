const express = require('express');
const router = express.Router();
const Routes1 = require('./Courseroute');
const Routes2 = require('./Resourceroute');
const Routes3 = require('./Enquiryroute');
const Routes4 = require('./Usersroute');

router.use('/courses',Routes1);
module.exports = router;
router.use('/resources',Routes2);
module.exports = router;
router.use('/users',Routes4);
module.exports = router;
router.use('/enquiries',Routes3);

module.exports = router;