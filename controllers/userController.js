'use strict';
// userController
'use strict';
const userModel = require('../models/userModel');

const users = userModel.users;

/*
const user_list_get = (req, res) => {
  res.json(users);
};
const user_get = (req, res) => {
	const id = parseInt(req.params.id)-1;
	console.log(parseInt(req.params.id)-1);
	
	for(var i=0;i<users.length;i++) {
		console.log(users[i]);
		if(users[i].id == req.params.id) {
			res.json(users[i]);
			return;
		}
	}
	res.json("Ei löydy");
};
*/

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const user_get = async (req, res) => {
  const user = await userModel.getUser(req.params.id);
  res.json(user);
};

const user_count = async (req, res) => {
  const user = await userModel.getUserCount();
  res.json(user);
};

const user_post = async(req, res) => {
	console.log(req.body);
	res.json(req.body);
}
const user_create_post = async(req, res) => {
	console.log(req.body);
	const response = await userModel.addUser(req.body);
	res.json(response);
}


module.exports = {
  user_list_get,
  user_get,
  user_post,
  user_count,
  user_create_post
};