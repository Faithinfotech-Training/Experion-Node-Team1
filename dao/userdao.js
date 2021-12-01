const User =  require('../models/Users');

var userDao={
    findAll:findAll,
    create:create,
    findById:findById,
    deleteById:deleteById,
    updateUser:updateUser
}
 function findAll(){
     return User.findAll();
 }

 function findById(id){
     return User.findByPk(id);
 }

 function deleteById(id){
     return User.destroy({where:{id:id}});
 }

 function create(user){
     var newUser = new User(user);
    
     return newUser.save();
     
 }

 function updateUser(user,id){
     var updateUser={
        
         id:user.id,
        Name:user.Name,
        email:user.email,
        dob:user.dob,
        mobile_number:user.mobile_number,
        Address:user.Address,
        HighestQualification:user.HighestQualification,
        PercentageOfMarks:user.PercentageOfMarks,
        YearOfPassout:user.YearOfPassout

        
     };
     return User.update(updateUser,{where:{id:id}});
 }
 module.exports=userDao;
 //comment