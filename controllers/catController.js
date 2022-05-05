// catController
'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;

/* const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
	/*const id = parseInt(req.params.id)-1;
	console.log(parseInt(req.params.id)-1);
	
	for(var i=0;i<cats.length;i++) {
		console.log(cats[i]);
		if(cats[i].id == req.params.id) {
			res.json(req.params.id);
			console.log(req.params.id);
			res.json(cats[i]);
			return;
		}
	}
	res.json("Ei löydy");
};
*/

const cat_post = (req, res) => {
		console.log(req.body);
		console.log(req.file);
		res.json(req.body);
}

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const cat_get = async (req, res) => {
  const cat = await catModel.getCat(req.params.id);
  res.json(cat);
};

const cat_count = async (req, res) => {
  const cat = await catModel.getCatCount();
  res.json(cat);
};
const cat_create_post = async(req, res) => {
	console.log(req.body);
	const response = await catModel.addCat(req);
	res.json(response);
}
const cat_update_put = async(req, res) => {
	const response = await catModel.updateCat(req);
	res.json(response);
}

const cat_picture = async(req,res) => {
	console.log(req.body)
}

const cat_delete = async(req,res) => {
	const response = await catModel.deleteCat(req.params.id);
}


module.exports = {
  cat_list_get,
  cat_get,
  cat_post,
  cat_count,
  cat_create_post,
  cat_picture,
  cat_update_put,
  cat_delete
};