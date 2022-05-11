'use strict';
require('dotenv').config()
const express = require('express');
const pug = require('pug');
var alert = require('alert');
var cookieParser = require('cookie-parser')


const webRoute = require('./routes/webRoute');
const app = express();
const port = 3000;
const cors = require('cors')

const loginPage = pug.compileFile('views/login_page.pug');
const registerPage = pug.compileFile('views/register_page.pug');
const mainPage = pug.compileFile('views/main.pug');
const postImage = pug.compileFile('views/post_image.pug');
const path = require('path');
app.set('views', './views');
app.set('view engine', 'pug');


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('routes'))
app.use(express.static('css'))
app.use(express.static('views'))
app.use(express.static('uploads'))
app.use(express.static(__dirname))



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use('/', webRoute)

app.use(cors())
app.use(express.static(__dirname + '/public/'))
app.use(cookieParser());


app.get('/test', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})









