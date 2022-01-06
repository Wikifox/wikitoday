const express = require('express');
const dotenv = require('dotenv').config();``
const port = process.env.PORT || 3000;
const WikiInfo = require('./lib/wikipedia');
const axios = require('axios');
const cheerio = require('./lib/scrapper');


const app = express();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.get('/wiki/:title*', (req, res) => {
    WikiInfo(req.params.title, (data) => {
        res.send(data);
    }) 
})

app.get('/:month?/:day?', (req, res) => {
    cheerio.GetOnThisDay({
        month: req.params.month,
        day: req.params.day,
    }, (data) => {
        res.send(data);
    })
})

app.get('/:category?/:month?/:day?', (req, res) => {
    cheerio.GetOnThisDay({
        month: req.params.month,
        day: req.params.day,
        categories: [req.params.category]
    }, (data) => {
        res.send(data);
    })
})
