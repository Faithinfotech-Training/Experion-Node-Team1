const EnquiryDao = require('../dao/enquirydao');

var enquiryController={
    addEnquiry:addEnquiry,
    findEnquiries:findEnquiries,
    findEnquiryById:findEnquiryById,
    findEnquiryByDate:findEnquiryByDate,
    updateEnquiry:updateEnquiry,
    deleteById:deleteById

}
 function addEnquiry(req,res){
     let enquiry = req.body;
     EnquiryDao.create(enquiry).
     then((data) => {
       
         res.send(data);
     })
     .catch((error)=>{
         console.log(error);
     });
 }

 function findEnquiryById(req,res){
    EnquiryDao.findById(req.params.EnquiryId)
     .then((data) => {

         res.send(data);
     })
     .catch((error) =>{
         console.log(error);
     });
 }

 function findEnquiryByDate(req,res){
    EnquiryDao.findByDate(req.params.EnquiryDate)
     .then((data) => {

         res.send(data);
     })
     .catch((error) =>{
         console.log(error);
     });
 }



 function deleteById(req,res){
    EnquiryDao.deleteById(req.params.EnquiryId).
     then((data) =>{
         res.status(200).json({
             message:"Enquiry deleted successfully",
             user:data
         })
     })
     .catch((error) =>{
         console.log(error);
     });
 }

 function updateEnquiry(req,res){
    EnquiryDao.updateEnquiry(req.body,req.params.EnquiryId).
     then((data) =>{
         res.status(200).json({
             message:"Enquiry updated successfully",
             enquiry:data
         })
     })
     .catch((error)=>{
         console.log(error)
     });
 }
 function findEnquiries(req,res){
    EnquiryDao.findAll().
     then((data)=>{
         res.send(data)
     })
     .catch((error) =>{
         console.log(error)
     });

     }
 module.exports = enquiryController;
 //comment