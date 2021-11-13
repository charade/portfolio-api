require('dotenv').config();
const express = require('express');
const router = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');


app.use(express.static(path.join(__dirname , '/files/')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
    res.setHeader('Access-Control-Allow-Methods', ["GET", "POST"]);
    next();
})
app.use(router);

app.listen(PORT);