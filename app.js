
const path = require('path');
const express = require('express');
const app = express()
const bodyParser = require('body-parser');

// const sequelize = require('./util/database');
const sequelize = require('./models/data');
app.use(bodyParser.json());

const RouterProduct = require('./routers/routproduct');
app.use(express.static(path.join(__dirname, 'public')));
app.use(RouterProduct);


sequelize
.sync()
.then(result =>{
    // console.log(result)
    console.log("Table Createde")
    app.listen(4000);
})
.catch(err =>console.log(err))



