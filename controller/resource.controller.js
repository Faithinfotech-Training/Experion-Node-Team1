const ResourceDao = require('../dao/resourcedao');

var ResourceController={
    addResource:addResource,
    findResources:findResources,
    findResourceByCode:findResourceByCode,
    updateResource:updateResource,
    deleteByCode:deleteByCode

}
 function addResource(req,res){
     let resource = req.body;
     ResourceDao.create(resource).
     then((data) => {
       
         res.send(data);
     })
     .catch((error)=>{
         console.log(error);
     });
 }

 function findResourceByCode(req,res){
     ResourceDao.findByResourceCode(req.params.ResourceCode).
     then((data) => {

         res.send(data);
     })
     .catch((error) =>{
         console.log(error);
     });
 }

 function deleteByCode(req,res){
     ResourceDao.deleteByCode(req.params.ResourceCode).
     then((data) =>{
         res.status(200).json({
             message:"Resource deleted successfully",
             resource:data
         })
     })
     .catch((error) =>{
         console.log(error);
     });
 }

 function updateResource(req,res){
     ResourceDao.updateResource(req.body,req.params.ResourceCode).
     then((data) =>{
         res.status(200).json({
             message:"Resource updated successfully",
             resource:data
         })
     })
     .catch((error)=>{
         console.log(error)
     });
 }
 function findResources(req,res){
     ResourceDao.findAll().
     then((data)=>{
         res.send(data)
     })
     .catch((error) =>{
         console.log(error)
     });

     }
 module.exports = ResourceController;
 //comment