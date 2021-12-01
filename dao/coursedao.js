
const Course =  require('../models/Course');

var courseDao={
    findAll:findAll,
    create:create,
    findByCode:findByCode,
    deleteByCode:deleteByCode,
    updateCourse:updateCourse
}
 function findAll(){
     return Course.findAll();
 }

 function findByCode(CourseCode){
     return Course.findByPk(CourseCode);
 }

 function deleteByCode(CourseCode){
     return Course.destroy({where:{CourseCode:CourseCode}});
 }

 function create(course){
     var newCourse = new Course(course);
    
     return newCourse.save();
     
 }

 function updateCourse(course,CourseCode){
     var updateCourse={
         CourseCode:course.CourseCode,
         CourseName:course.CourseName,
         Description:course.Description,
         Duration:course.Duration,
         Fees:course.Fees,
         Qualification:course.Qualification
        

        
     };
     return Course.update(updateCourse,{where:{CourseCode:CourseCode}});
 }
 module.exports=courseDao;
 //comment