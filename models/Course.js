const Sequelize = require('sequelize');
const db=require('../config/database');

const Course=db.define('course',{
    CourseCode:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    CourseName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Duration:{
        type:Sequelize.INTEGER
        
    },
    Fees:{
        type:Sequelize.INTEGER
        
    },
    Qualification:{
        type:Sequelize.STRING
        
    },
    CourseModules:{
        type:Sequelize.STRING
    },
    url:{
        type:Sequelize.STRING
    }
    
});

module.exports=Course;