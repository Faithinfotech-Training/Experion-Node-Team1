
const UserDao = require('../dao/userdao');

var userController={
    addUser:addUser,
    findUsers:findUsers,
    findUserById:findUserById,
    updateUser:updateUser,
    deleteById:deleteById

}
 function addUser(req,res){
     let user = req.body;
     UserDao.create(user).
     then((data) => {
       
         res.send(data);
     })
     .catch((error)=>{
         console.log(error);
     });
 }

 function findUserById(req,res){
     UserDao.findById(req.params.id)
     .then((data) => {

         res.send(data);
     })
     .catch((error) =>{
         console.log(error);
     });
 }

 function deleteById(req,res){
    UserDao.deleteById(req.params.id).
     then((data) =>{
         res.status(200).json({
             message:"User deleted successfully",
             user:data
         })
     })
     .catch((error) =>{
         console.log(error);
     });
 }

 function updateUser(req,res){
    UserDao.updateUser(req.body,req.params.id).
     then((data) =>{
         res.status(200).json({
             message:"User updated successfully",
             course:data
         })
     })
     .catch((error)=>{
         console.log(error)
     });
 }
 function findUsers(req,res){
    UserDao.findAll().
     then((data)=>{
         res.send(data)
     })
     .catch((error) =>{
         console.log(error)
     });

     }
 module.exports = userController;
 //comment
