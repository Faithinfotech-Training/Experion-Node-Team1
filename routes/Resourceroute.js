const express = require('express');
const router = express.Router();
const resourceController=require('../controller/resource.controller');
//Resource Routing
router.post('/',resourceController.addResource);
router.get('/',resourceController.findResources);
router.get('/:ResourceCode',resourceController.findResourceByCode);
router.put('/:ResourceCode',resourceController.updateResource);
router.delete('/:ResourceCode',resourceController.deleteByCode);
module.exports = router;

