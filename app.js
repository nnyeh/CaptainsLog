'use strict';
require('dotenv').config()
const express = require('express');
const catRoute = require('./routes/catRoute');
const webRoute = require('./routes/webRoute');
const catModel = require('./models/catModel');
const userRoute = require('./routes/userRoute');
const userModel = require('./models/userModel');
const app = express();
const port = 3000;
var cors = require('cors')



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('routes'))
app.use(express.static('uploads'))
app.use(express.static(__dirname))



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use('/user', userRoute)
app.use('/cat', catRoute)
app.use('/', webRoute)
app.use('/login', webRoute)
app.use('/register', webRoute)
app.use('/post', webRoute)
app.use(cors())
app.use(express.static(__dirname + '/public/'))


app.get('/test', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})







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
