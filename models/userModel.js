'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const addUser = async (user, res) => {
  try {
    const [rows] = await promisePool.query(`INSERT INTO user(name, email, password) VALUES ("${user.username}","${user.email}","${user.password}")`);
    console.log(`User  insert`, rows, rows[0]);
    return rows;
  } catch (e) {
    console.error('User model createUser error', e.message);
    return;
  }
};

module.exports = {
  addUser
  
};