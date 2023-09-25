const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { extname } = require('path');
const { title } = require('process');
const app = express();
const port = 3000;

//HTTP Logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs',handlebars.engine({
  extname : '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); //set view for APP

app.get('/', (req, res) => {
  res.render('home', {title:'OFFICIAL'});
})
app.get('/home-page', (req, res) => {
  res.render('homePage', {title:'HOMEPAGE'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})