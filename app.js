require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose= require ('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);//mongodb://localhost/storebook

const connection= mongoose.connection;
connection.on('connected',() =>{
    console.log('Mongoose Connected Successfully');
})

connection.on('err',(err)=>{
    console.log('Mongoose default connection error: ' + err);
})

const ForecastRouter=require('./routes/forecast')
const storesRouter=require('./routes/stores');
const groupsRouter=require('./routes/groups');
var usersRouter = require('./routes/users');


var app = express();

app.use(express.static(`${__dirname}/client/build`))
app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use ('/api/Forecast',ForecastRouter);
app.use('/api/stores', storesRouter);
app.use('/api/stores/:storeId/groups', groupsRouter);
app.use('/api/users', usersRouter);
app.use('/api/groups',groupsRouter);
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
  })




module.exports = app;
