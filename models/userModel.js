'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM user');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const getPostsFromUser = async (id) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query('SELECT * FROM wop_user WHERE user_id = '+id);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const getUserCount = async () => {
  try {
    const [rows] = await promisePool.query('SELECT COUNT(*) FROM user');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const addUser = async (user) => {
  try {
    const [rows] = await promisePool.query('INSERT INTO user (name,email,password,role) VALUES("'+user.name+'","'+user.email+'","'+user.passwd+'",1)');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

module.exports = {
  getAllUsers,
  
};














/*
'use strict';
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@metropolia.fi',
    password: '1234',
  },
  {
    id: '2',
    name: 'Jane Doez',
    email: 'jane@metropolia.fi',
    password: 'qwer',
  },
];

module.exports = {
  users,
};
*/