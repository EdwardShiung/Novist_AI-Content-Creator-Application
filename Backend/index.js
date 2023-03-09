const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//DB Module
require('./plugin/db')(app);

//Swagger
require('./plugin/swagger')(app);

//Middle Ware
app.use(bodyParser.urlencoded({extended:false}));

//JSON
app.use(bodyParser.json());

//Routes Module
require('./routes/index')(app);



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})