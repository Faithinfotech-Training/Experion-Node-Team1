const Sequelize = require('sequelize');
const db=require('../config/database');

const EnquiryStatus=db.define('enquirystatus',{
   //comment 

    EnquiryId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        
    },
    Previous_Status:{
        type:Sequelize.STRING
        
    },
    Current_Status:{
        type:Sequelize.STRING
        
    }
    

   
    
});

module.exports=EnquiryStatus;