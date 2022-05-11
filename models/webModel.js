'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();
var cookieParser = require('cookie-parser')


const addPost = async (req) => {
  try {
	//console.log(`INSERT INTO post (user_id, ship, text, filename) VALUES('${req.cookies.user_id}', '${req.body.Ship}', '${req.body.Title}', '${req.file.filename}'`);
	const [rows] = await promisePool.query(`INSERT INTO post (user_id, ship, text, filename) VALUES('${req.cookies.user_id}', '${req.body.Ship}', '${req.body.Title}', '${req.file.filename}')`);
	let response = { message: "Hyvin meni" };
	return response;
  } catch (e) {
    console.error('error', e.message);
	let response = "error";
	return response;
  }
};
const getAllPosts = async () => {
  try {
    const [rows] = await promisePool.query('SELECT post.*,user.name FROM post inner join user on post.user_id = user.user_id');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};


const loginUser = async (req) => {
  try {
    const [rows] = await promisePool.query(`SELECT name, user_id FROM user WHERE email='${req.body.username}' AND password='${req.body.password}'`);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

module.exports = {
  addPost,
  getAllPosts,
  loginUser,
};