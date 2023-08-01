require('dotenv').config({path : './Process.env'});  // Load Env
const express = require('express');
const db = require('./config/mongoose');


const port = process.env.PORT || 8000;;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const { config } = require('dotenv');
app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(expressLayouts);
app.use(cors());

// Extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'views'));



// Use express router
app.use('/', require('./routes'));
// app.get('/', (req, res) => {
//     res.render('home', { projects });
//   });

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
