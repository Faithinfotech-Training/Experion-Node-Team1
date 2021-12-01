const EnquiryStatus =  require('../models/enquirystatus');
const db=require('../config/database');

var enquirystatusDao={
    findAll:findAll,
    create:create,
    findById:findById,
    
    deleteById:deleteById,
    updateEnquiryStatus:updateEnquiryStatus
}
 function findAll(){
     return EnquiryStatus.findAll();
 }

 function findById(EnquiryId){
     return EnquiryStatus.findByPk(EnquiryId);
 }


 


 function deleteById(EnquiryId){
     return EnquiryStatus.destroy({where:{EnquiryId:EnquiryId}});
 }

 function create(enquiry){
     var newEnquiry = new EnquiryStatus(enquiry);
    
     return newEnquiry.save();
     
 }

 function updateEnquiryStatus(enquiry,EnquiryId){
     var updateEnquiryStatus={
        EnquiryId:enquiry.EnquiryId,
        Previous_Status:db.enquirystatus.Current_Status,
        Current_Status:enquiry.Current_Status

         
        

        
     };
     return EnquiryStatus.update(updateEnquiryStatus,{where:{EnquiryId:EnquiryId}});
 }
 module.exports=enquirystatusDao;
 //comment