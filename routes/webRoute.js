'use strict';
// webRoute
const express = require('express')
const router = express.Router()
const webController = require('../controllers/webController');
const authController = require('../controllers/authController');

const pug = require('pug');
const cors = require('cors')
const multer  = require('multer')
const upload = multer({ dest: './uploads/' })
const uploadImg = upload.single('image')
const path = require('path');

const mainPage = pug.compileFile('views/main.pug');
const postImage = pug.compileFile('views/post_image.pug');

var cookieParser = require('cookie-parser')

router.use(express.json());
router.use(cors())
router.use(cookieParser());



router.get('/',function(req,res){
	res.render('main');
});

router.route('/register')
	.get((req, res) => {
		res.render('register_page');
	})
	.post(authController.user_create_post)
router.route('/login')
	.get((req, res) => {
	res.render('login_page');
	})
	.post(webController.login_user);

router.get('/logout', function (req, res) {
  res.clearCookie('user');
  res.redirect('/');
})

router.get('/getuserinfo', function (req, res) {
  res.send('{"user":' + '"' + req.cookies.user + '"}')
})

router.get('/allposts', webController.post_list_get);

router.get('/post_image',function(req,res){
  res.send(postImage());
 
});

router.post('/post_image', uploadImg, webController.create_post);


 module.exports = router 