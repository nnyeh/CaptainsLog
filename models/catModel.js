'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    // const [rows] = await promisePool.query('SELECT wop_cat.*,wop_user.name as ownername FROM wop_cat,wop_user where wop_cat.owner=wop_user.user_id;');
	const [rows] = await promisePool.query('SELECT wop_cat.*,wop_user.name as ownername FROM wop_cat inner join wop_user on wop_cat.owner=wop_user.user_id;');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const getCat = async (id) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query('SELECT * FROM wop_cat WHERE cat_id = '+id);
    return rows[0];
  } catch (e) {
    console.error('error', e.message);
  }
};

const getCatCount = async () => {
  try {
    const [rows] = await promisePool.query('SELECT COUNT(*) FROM wop_cat');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};
const addCat = async (req) => {
  try {
	  console.log(req.file);
    const [rows] = await promisePool.query('INSERT INTO wop_cat (name,weight,owner, filename, birthdate) VALUES("'+req.body.name+'","'+req.body.weight+'","'+req.body.owner+'","'+req.file.filename+'","'+req.body.birthdate+'")');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};
const updateCat = async(req) => {
	try {
		console.log(req.body);
		const [rows] = await promisePool.query(`UPDATE wop_cat SET name= '${req.body.name}', birthdate = '${req.body.birthdate}', weight='${req.body.weight}', owner='${req.body.owner}' WHERE cat_id=${req.body.id}`);
		
		let response = { message: "Hyvin meni" };

		return response;
  } catch (e) {
    console.error('error', e.message);
  }
};

const deleteCat = async(id) => {
	try {
		console.log(id);
		const [rows] = await promisePool.query(`DELETE FROM wop_cat WHERE cat_id = ${id}`);
		
		let response = { message: "Hyvin meni" };

		return response;
  } catch (e) {
    console.error('error', e.message);
  }
};
module.exports = {
  getAllCats,
  getCat,
  getCatCount,
  addCat,
  updateCat,
  deleteCat
};

/*
'use strict';
const cats = [
  {
    id: '1',
    name: 'Frank',
    birthdate: '2010-10-30',
    weight: '5',
    owner: '1',
    filename: 'http://placekitten.com/400/300',
  },
  {
    id: '2',
    name: 'James',
    birthdate: '2015-12-25',
    weight: '11',
    owner: '2',
    filename: 'http://placekitten.com/400/302',
  },
];


module.exports = {
  cats
};
*/