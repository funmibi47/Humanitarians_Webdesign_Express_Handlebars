const express = require('express');
const exphbs = require('express-handlebars'); // updated to 6.0.X
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { path } = require('express/lib/application');
const paths = require('path')

 

const app = express();
const port = process.env.PORT || 5000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: true})); // New

// Parse application/json
// app.use(bodyParser.json());
app.use(express.json()); // New

// Static Files
app.use(express.static('public'));

// Templating engine
const handlebars = exphbs.create({ extname: '.hbs',defaultLayout: 'mainLayout',layoutsDir: paths.join(__dirname,'views/layouts')});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

// Update to 6.0.X
// const handlebars = exphbs.create({ extname: '.hbs',});
// app.engine('.hbs', handlebars.engine);
// app.set('view engine', '.hbs');

 
 
// Router
app.get('', (req, res) => {
    res.render('index', {title: 'home page'});
});

// const routes = require('./server/routes/user');
// app.use('/', routes);



app.listen(port, () => console.log(`Listening on port ${port}`));