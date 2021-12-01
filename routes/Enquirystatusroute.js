const express = require('express');
const router = express.Router();
const enquirystatusController=require('../controller/enquirystatus.controller');
//Enquiry Routing
router.post('/',enquirystatusController.addEnquiry);
router.get('/',enquirystatusController.findEnquiries);
router.get('/:EnquiryId',enquirystatusController.findEnquiryById);
//router.get('/:EnquiryDate',enquiryController.findEnquiryByDate);
router.put('/:EnquiryId',enquirystatusController.updateEnquiryStatus);
router.delete('/:EnquiryId',enquirystatusController.deleteById);
module.exports = router;



