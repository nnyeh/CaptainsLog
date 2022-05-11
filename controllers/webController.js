
'use strict';
const webModel = require('../models/webModel');
const cookieParser = require('cookie-parser')
const pug = require('pug');

const web = webModel.web;
const loginPage = pug.compileFile('views/login_page.pug');

const mainPage = pug.compileFile('views/main.pug');

const create_post = async(req, res) => {
	console.log(req.cookies.user_id);
	const response = await webModel.addPost(req);
	if(response ==="error"){
		res.send(loginPage() + "Please login to make posts");
	}
	console.log("response");
	res.render('main')
}

const post_list_get = async (req, res) => {
  const posts = await webModel.getAllPosts();
  res.json(posts);
};

const login_user  = async (req, res) => {
  const users = await webModel.loginUser(req);
  console.log(users.length)
  if(users.length==0){
	  res.send(loginPage() + "Wrong username or password");
  }
  else{
	res.cookie('user',users[0].name);
	res.cookie('user_id',users[0].user_id);
	res.redirect('/')
  }
 
}

module.exports = {
  create_post,
  post_list_get,
  login_user,
};