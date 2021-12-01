const EnquiryStatusDao = require('../dao/enquirystatusdao');

var enquirystatusController={
    addEnquiry:addEnquiry,
    findEnquiries:findEnquiries,
    findEnquiryById:findEnquiryById,
    
    updateEnquiryStatus:updateEnquiryStatus,
    deleteById:deleteById

}
 function addEnquiry(req,res){
     let enquiry = req.body;
     EnquiryStatusDao.create(enquiry).
     then((data) => {
       
         res.send(data);
     })
     .catch((error)=>{
         console.log(error);
     });
 }

 function findEnquiryById(req,res){
    EnquiryStatusDao.findById(req.params.EnquiryId)
     .then((data) => {

         res.send(data);
     })
     .catch((error) =>{
         console.log(error);
     });
 }

//  function findEnquiryByDate(req,res){
//     EnquiryDao.findByDate(req.params.EnquiryDate)
//      .then((data) => {

//          res.send(data);
//      })
//      .catch((error) =>{
//          console.log(error);
//      });
//  }



 function deleteById(req,res){
    EnquiryStatusDao.deleteById(req.params.EnquiryId).
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

 function updateEnquiryStatus(req,res){
    EnquiryStatusDao.updateEnquiryStatus(req.body,req.params.EnquiryId).
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
    EnquiryStatusDao.findAll().
     then((data)=>{
         res.send(data)
     })
     .catch((error) =>{
         console.log(error)
     });

     }
 module.exports = enquirystatusController;