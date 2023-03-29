const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

//DB Module
require('./plugin/db')(app);

//Swagger
require('./plugin/swagger')(app);

//Middle Ware
app.use(bodyParser.urlencoded({extended:false}));

//JSON
app.use(bodyParser.json());

//Passport Authentication
require('./plugin/passport')(passport);

//-- Routes Module
//User Module
require('./routes/user_index')(app);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})