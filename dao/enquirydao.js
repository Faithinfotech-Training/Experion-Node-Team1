const Enquiry =  require('../models/enquiry');

var enquiryDao={
    findAll:findAll,
    create:create,
    findById:findById,
    findByDate:findByDate,
    deleteById:deleteById,
    updateEnquiry:updateEnquiry
}
 function findAll(){
     return Enquiry.findAll();
 }

 function findById(EnquiryId){
     return Enquiry.findByPk(EnquiryId);
 }


 function findByDate(EnquiryDate){
    return Enquiry.findOne({where:{EnquiryDate:EnquiryDate}});
}


 function deleteById(EnquiryId){
     return Enquiry.destroy({where:{EnquiryId:EnquiryId}});
 }

 function create(enquiry){
     var newEnquiry = new Enquiry(enquiry);
    
     return newEnquiry.save();
     
 }

 function updateEnquiry(enquiry,EnquiryId){
     var updateEnquiry={
        EnquiryId:enquiry.EnquiryId,
        Email_id:enquiry.Email_id,
         Name:enquiry.Name,
         dob:enquiry.dob,
        mobile_number:enquiry.mobile_number,
        Address:enquiry.Address,
        HighestQualification:enquiry.HighestQualification,
        PercentageOfMarks:enquiry.PercentageOfMarks,
        YearOfPassout:enquiry.YearOfPassout,
         Type:enquiry.Type,
         Course_Name:enquiry.Course_Name,
         Resource_Name:enquiry.Resource_Name,
         Enquiry:enquiry.Enquiry,
         EnquiryDate:enquiry.EnquiryDate,
         Status:enquiry.Status,

         
        

        
     };
     return Enquiry.update(updateEnquiry,{where:{EnquiryId:EnquiryId}});
 }
 module.exports=enquiryDao;