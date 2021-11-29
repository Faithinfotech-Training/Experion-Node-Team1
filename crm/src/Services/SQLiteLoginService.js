//js code should be executed in "strict mode"
"use strict";

//require the express and body-parser modules
const express = require('express');
const bodyParser = require('body-parser');
const { text } = require('body-parser');

//create an express application and an expresss router
const app=express();
const router=express.Router();

//added body parser middlewares that will allow us to get parse json data from the request body

router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

            
    

router.post('/register',(req,res)=>{
    const username=req.body.username;
    const email=req.body.email;
    const password=bcrypt.hashSync(req.body.password);
    
    createUser([username,email,password],(err)=>{
        if(err)return res.status(500).send("server error");
         findUserByEmail(email,(err,user)=>{
            if(err)return res.status(500).send("server error");
              const expiresIn=24*60*60;
              const accessToken=jwt.sign({id:user.id},SECRET_KEY,{
                  expiresIn:expiresIn
              });
              res.status(200).send({
                  "user":user,"accessToken":accessToken,"expires_in":expiresIn
              });
             
         });
    });
});



router.post('/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
   
    
   
    findUserByEmail(email, (err,user)=>{
        if(err) return res.status(500).send('Server Error!');
        if(!user) return res.status(404).send('User not found!');

        const result =bcrypt.compareSync(password,user.password);
        if(!result) return res.status(401).send('Password not valid!');
    
       
    
   
        findUserByRole(email,password, (err,user)=>{
            if(err) return res.status(500).send('Server Error!');
            if(!user) return res.status(404).send('User not found!');
    
            const result =bcrypt.compareSync(password,user.password);
            if(!result) return res.status(401).send('Password not valid!');
            
        })
        const expiresIn = 24*60*60;
        const accessToken = jwt.sign({id: user.id}, SECRET_KEY,{
            expiresIn : expiresIn
        });
        res.status(200).send({"user":user, "accessToken": accessToken, "expires_in":expiresIn});
    });
});

app.use(router);
const port=process.env.PORT||3005;
const server=app.listen(port,()=>{
    console.log('server listening at http://localhost:'+port);
});

router.get('/',(req,res)=>{
    res.status(200).send('this is an authentication server');
});

const sqlite3=require('sqlite3').verbose();
const database=new sqlite3.Database("./my.db");


  const createUsersTable=()=>{
      const sqlQuery=`
           CREATE TABLE IF NOT EXISTS users(
               id integer PRIMARY KEY,
                username text,
                email text UNIQUE,
                password text,
                role number )`;
               return database.run(sqlQuery);
           
  }
  const findUserByEmail=(email,cb)=>{
      return database.get(`SELECT * FROM users WHERE email = ?`,[email],(err,row)=>{
          cb(err,row)
      });
  }
  
  const findUserByRole=(email,password,cb)=>{
      return database.get(`SELECT * FROM users WHERE email=? && password=? && usertype="Admin"`,[email],[password],(err,row)=>{
                cb(err,row)
      });
  }

  const createUser=(user,cb)=>{
      return database.run('INSERT INTO users (username,email,password) VALUES(?,?,?,?,?)',user,(err)=>{
          cb(err)
      });
  }
  createUsersTable();

  const jwt= require('jsonwebtoken');
  const bcrypt=require('bcryptjs');
const { Routes } = require('react-router');

  const SECRET_KEY = "Secretkey23456";


