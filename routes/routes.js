const express = require('express');
const router = express.Router();
const Routes1 = require('./Courseroute');
const Routes2 = require('./Resourceroute');
const Routes3 = require('./Enquiryroute');
const Routes4 = require('./Usersroute');
const Routes5 = require('./Enquirystatusroute');

router.use('/courses',Routes1);

router.use('/resources',Routes2);

router.use('/users',Routes4);

router.use('/enquiries',Routes3);
router.use('/enquirystatus',Routes5);

module.exports = router;