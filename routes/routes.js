const express = require('express');
const router = express.Router();
const Routes = require('./route');

router.use('/courses',Routes);
router.use('/resources',Routes);
router.use('/users',Routes);
module.exports = router;