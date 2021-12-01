
const Resource =  require('../models/Resource');

var resourceDao={
    findAll:findAll,
    create:create,
    findByResourceCode:findByResourceCode,
    deleteByCode:deleteByCode,
    updateResource:updateResource
}
 function findAll(){
     return Resource.findAll();
 }

 function findByResourceCode(ResourceCode){
     return Resource.findByPk(ResourceCode);
 }

 function deleteByCode(ResourceCode){
     return Resource.destroy({where:{ResourceCode:ResourceCode}});
 }

 function create(resource){
     var newResource = new Resource(resource);
    
     return newResource.save();
     
 }

 function updateResource(resource,ResourceCode){
     var updateResource={
        ResourceCode:resource.ResourceCode,
         ResourceName:resource.ResourceName,
         Description:resource.Description,
         Duration:resource.Duration,
         Fees:resource.Fees,
         Qualification:resource.Qualification
        

        
     };
     return Resource.update(updateResource,{where:{ResourceCode:ResourceCode}});
 }
 module.exports=resourceDao;
 //comment