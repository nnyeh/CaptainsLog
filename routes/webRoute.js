'use strict';
// webRoute
const express = require('express')
const router = express.Router()
const webController = require('../controllers/webController');
var cors = require('cors')
const multer  = require('multer')
const upload = multer({ dest: './uploads/' })
const uploadImg = upload.single('image')
const path = require('path');

router.use(express.json());
router.use(cors())


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/main.html/'));
});

/*router.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html/'));
});

router.get('/register',function(req,res){
  res.sendFile(path.join(__dirname+'/register.html/'));
}); 
*/
router.get('/allposts', webController.post_list_get);


router.get('/postimg',function(req,res){
  res.sendFile(path.join(__dirname+'/postpicture.html/'));
 
});
router.post('/postimg', uploadImg, webController.create_post);


 module.exports = router 