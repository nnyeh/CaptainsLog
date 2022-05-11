'use strict';

const bcrypt = require('bcrypt');
const passport = require('passport');
const userModel = require('../models/userModel');


const user_create_post = async (req, res) => {
  console.log(`user controller post body`, req.body);
 
  const users = await userModel.addUser(req.body);
  console.log(users);
  // If user is added then redirects user to login page
  if(users) {
    res.redirect('/login')
  }
  else{
	  res.send('/login' + "error");
  }
};


module.exports = {
  user_create_post
};