const express = require('express');
const router = express.Router();
const courseController=require('../controller/course.controller');
//Course Routing
router.post('/',courseController.addCourse);
router.get('/',courseController.findCourses);
router.get('/:CourseCode',courseController.findCourseByCode);
router.put('/:CourseCode',courseController.updateCourse);
router.delete('/:CourseCode',courseController.deleteByCode);

module.exports = router;
//comment

