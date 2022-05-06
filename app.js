'use strict';
require('dotenv').config()
const express = require('express');
const pug = require('pug');

const webRoute = require('./routes/webRoute');
const webModel = require('./models/catModel');
const userModel = require('./models/userModel');
const app = express();
const port = 3000;
var cors = require('cors')

const loginPage = pug.compileFile('views/login_page.pug');
const registerPage = pug.compileFile('views/register_page.pug');
app.set('views', './views');
app.set('view engine', 'pug');


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('routes'))
app.use(express.static('uploads'))
app.use(express.static(__dirname))
app.use(express.static('public'))
app.use(express.static('files'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use('/', webRoute)
app.use(cors())
app.use(express.static(__dirname + '/public/'))


app.get('/test', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.get('/login', (req, res) => {
	res.send(loginPage());
})

app.get('/register', (req, res) => {
  res.send(registerPage());
});

/* Login user */
app.post('/login', function (req, res, next) {
	
	console.log(req.body);
	
	res.send("Login "+req.body.username);
});

app.post('/register', function (req, res, next) {
	
	console.log(req.body);
	
	res.send("Register "+req.body.username);
	
});



/*app.route('/cat/:id')
.get((req, res) => {
	var testi = "You reqested a cat whose id is " + req.params.id;
	
	console.log("Kissojen pituus = ",catModel.cats.length);

	catModel.cats.forEach(cat => { if(cat.id == req.params.id) { testi = testi +" "+ cat.name } } )
	
    res.send(testi)
	
	console.log(testi)	
  })
  */


/*
	for(var i=0;i<catModel.cats.length;i++) {
		console.log(catModel.cats[i]);
		if(catModel.cats[i].id == req.params.id) {
			testi = testi +" "+ catModel.cats[i].name;
			break;
		}
	}
*/	


/* app.get('/cat', (req, res) => {
	res.send('From this endpoint you can get cats.')
 });

 app.route('/cat')
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
