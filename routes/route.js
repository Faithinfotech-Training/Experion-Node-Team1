const express = require('express');
const router = express.Router();
const courseController=require('../controller/course.controller');
const userController=require('../controller/user.controller');
const resourceController=require('../controller/resource.controller');

//Users Routing
router.post('/',userController.addUser);
router.get('/',userController.findUsers);
router.get('/:id',userController.findUserById);
router.put('/:id',userController.updateUser);
router.delete('/:id',userController.deleteById);

//Resource Routing
router.post('/',resourceController.addResource);
router.get('/',resourceController.findResources);
router.get('/:ResourceCode',resourceController.findResourceByCode);
router.put('/:ResourceCode',resourceController.updateResource);
router.delete('/:ResourceCode',resourceController.deleteByCode);


//Course Routing
router.post('/',courseController.addCourse);
router.get('/',courseController.findCourses);
router.get('/:CourseCode',courseController.findCourseByCode);
router.put('/:CourseCode',courseController.updateCourse);
router.delete('/:CourseCode',courseController.deleteByCode);

module.exports = router;

