require('dotenv').config();
const express = require('express');
const router = require('./routes');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3002;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', "GET, POST");
    res.setHeader('Access-Control-Allow-Headers', "Content-type")
    next();
})
app.use(express.urlencoded());
app.use(express.json());
app.use(router);

app.listen(PORT);