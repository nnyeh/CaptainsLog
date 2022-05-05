'use strict';
// userRoute
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController');
var cors = require('cors')

router.use(cors())


router.use((req, res, next) => {
  console.log('test')
  next()
})
router.get('/', userController.user_list_get);
router.get('/:id', userController.user_get);
router.post('/', userController.user_create_post);
router.get('/usercount', userController.user_count);



/*
router.route('/')
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
  */
  
  module.exports = router 