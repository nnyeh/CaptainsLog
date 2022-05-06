'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const addPost = async (post) => {
  try {
    //const [rows] = await promisePool.query('INSERT INTO user (name,email,password,role) VALUES("'+user.name+'","'+user.email+'","'+user.passwd+'",1)');
    // return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};
const getAllPosts = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_user ORDER BY user_id DESC;');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};
module.exports = {
  addPost,
  getAllPosts,
};