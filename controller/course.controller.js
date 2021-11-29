

const CourseDao = require('../dao/coursedao');

var courseController={
    addCourse:addCourse,
    findCourses:findCourses,
    findCourseByCode:findCourseByCode,
    updateCourse:updateCourse,
    deleteByCode:deleteByCode

}
 function addCourse(req,res){
     let course = req.body;
     CourseDao.create(course).
     then((data) => {
       
         res.send(data);
     })
     .catch((error)=>{
         console.log(error);
     });
 }

 function findCourseByCode(req,res){
     CourseDao.findByCode(req.params.CourseCode).
     then((data) => {

         res.send(data);
     })
     .catch((error) =>{
         console.log(error);
     });
 }

 function deleteByCode(req,res){
     CourseDao.deleteByCode(req.params.CourseCode).
     then((data) =>{
         res.status(200).json({
             message:"Course deleted successfully",
             course:data
         })
     })
     .catch((error) =>{
         console.log(error);
     });
 }

 function updateCourse(req,res){
     CourseDao.updateCourse(req.body,req.params.CourseCode).
     then((data) =>{
         res.status(200).json({
             message:"Course updated successfully",
             course:data
         })
     })
     .catch((error)=>{
         console.log(error)
     });
 }
 function findCourses(req,res){
     CourseDao.findAll().
     then((data)=>{
         res.send(data)
     })
     .catch((error) =>{
         console.log(error)
     });

     }
 module.exports = courseController;
