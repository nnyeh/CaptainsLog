'use strict';
// webRoute
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController');
var cors = require('cors')
const path = require('path');

router.use(express.json());
router.use(cors())


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/main.html/'));
  //__dirname : It will resolve to your project folder.
});

router.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html/'));
  //__dirname : It will resolve to your project folder.
});

router.get('/register',function(req,res){
  res.sendFile(path.join(__dirname+'/register.html/'));
  //__dirname : It will resolve to your project folder.
}); 

router.get('/post',function(req,res){
  res.sendFile(path.join(__dirname+'/postpicture.html/'));
  //__dirname : It will resolve to your project folder.
});
  module.exports = router 