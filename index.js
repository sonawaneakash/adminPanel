express = require('express');
app = express();
const port = 8080;
router = express.Router(); 
bodyParser = require('body-parser');
mysql = require('mysql');
multer  = require('multer') //for image upload
// expressValidator = require('express-validator');
path = require("path");
rootDir = __dirname;
app.use(bodyParser.json());
// app.use(expressValidator());


app.use('/', require('./app/routes/routes.js'));
app.listen(port, console.log(`server is running on port ${port}`));