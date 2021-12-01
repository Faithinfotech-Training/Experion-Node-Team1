const Sequelize = require('sequelize');
const db=require('../config/database');
//comment
const Resource=db.define('resource',{
    ResourceCode:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    ResourceName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Fees:{
        type:Sequelize.INTEGER,
        
    },
    ResourceModules:{
        type:Sequelize.STRING
    },
    url:{
        type:Sequelize.STRING
    }
    
});

module.exports=Resource;
//resource