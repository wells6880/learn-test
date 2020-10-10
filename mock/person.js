// import express from 'express';
const express = require('express');

const person = express.Router();

person.get('/person', (req, res) => {
    setTimeout(() => {
        res.send({
            code: 200,
            data: {
                name: 'ws',
                age: 18
            }
        });
    }, 2001);
});

// export default person;
module.exports = person;
