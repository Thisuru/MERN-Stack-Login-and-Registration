const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//Mongoose connection String needs to be added

app.listen(3001, () => {
    console.log('Server is Running on port: 3001');
})  