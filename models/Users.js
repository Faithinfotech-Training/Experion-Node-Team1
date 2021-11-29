const Sequelize = require('sequelize');
const db=require('../config/database');

const User=db.define('user',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    dob:{
        type:Sequelize.DATEONLY
        
    },
    mobile_number:{
        type:Sequelize.NUMBER
        
    },
    Address:{
        type:Sequelize.STRING
    },
    HighestQualification:{
        type:Sequelize.STRING
        
    },
    PercentageOfMarks:{
        type:Sequelize.INTEGER
        
    },
    YearOfPassout:{
        type:Sequelize.DATEONLY
        
    }


    
    
});

module.exports=User;