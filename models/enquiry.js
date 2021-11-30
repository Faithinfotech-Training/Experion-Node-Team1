const Sequelize = require('sequelize');
const db=require('../config/database');

const Enquiry=db.define('enquiry',{
    

    EnquiryId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Email_id:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    dob:{
        type:Sequelize.DATEONLY
        
    },
    mobile_number:{
        type:Sequelize.NUMBER,
        allowNull:false
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
        
    },
    Type:{
        type:Sequelize.INTEGER
      
        
    },
    Course_Name:{
        type:Sequelize.INTEGER
       
        
    },
    Resource_Name:{
        type:Sequelize.INTEGER
        
        
    },
    EnquiryDate:{
        type:Sequelize.DATEONLY,
        allowNull:false
        
    },
    Enquiry:{
        type:Sequelize.INTEGER,
        allowNull:false
        
    },
    Status:{
        type:Sequelize.STRING
        
    },

   
    
});

module.exports=Enquiry;