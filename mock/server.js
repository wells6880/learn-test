// import express from 'express';

// import person from './person';

const express = require('express');
const person = require('./person');

const app = express();

// 设置跨域请求头
// app.all('*', (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
//     res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
//     next();
// });

app.use('/api', person);

app.listen(9001, () => {
    console.log('Mock server listening at http://localhost:9001');
});
