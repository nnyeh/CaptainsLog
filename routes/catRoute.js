'use strict';
// catRoute
const express = require('express')
const router = express.Router()
const catController = require('../controllers/catController');
var cors = require('cors')
const multer  = require('multer')
const upload = multer({ dest: './uploads/' })
const uploadCat = upload.single('cat')

router.use(cors())

router.use((req, res, next) => {
  console.log('test')
  next()
})
router.route('/')
	.get(catController.cat_list_get)
	.post(uploadCat, catController.cat_create_post)
	.put(catController.cat_update_put);
router.route('/:id')
 .get(catController.cat_get)
 .delete(catController.cat_delete);

router.get('/catcount', catController.cat_count);
// EI TOIMI router.get('/picture/:id', catController.cat_picture);

// router.post('/', uploadCat, catController.cat_create_post)
// req.file is the `avatar` file
// req.body will hold the text fields, if there were any
//router.post('/cat', upload.none(), catController.cat_post);
//router.delete('/:id', catController.cat_delete);




router.route('/cat')
 .get((req, res) => {
    res.send('From this endpoint you can get cats.')
  })
  .post((req, res) => {
    res.send('With this endpoint you can add cats.')
  })
  .put((req, res) => {
    res.send('With this endpoint you can edit cats.')
  })
  .delete((req, res) => {
    res.send('With this endpoint you can delete cats.')

  })
  
  
  module.exports = router 