
'use strict';
const webModel = require('../models/webModel');

const webs = webModel.web;



const create_post = async(req, res) => {
	console.log(req.body);
	//const response = await webModel.addPost(req);
	//res.json(response);
}

const post_list_get = async (req, res) => {
  const posts = await webModel.getAllPosts();
  res.json(posts);
};


module.exports = {
  create_post,
  post_list_get,
};