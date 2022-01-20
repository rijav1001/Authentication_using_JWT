const express = require('express');
const jwt = require('jsonwebtoken');
const cities = require('./models/cities');
const data = require('./cities');

// ----- DB connection -----

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CityDB', {}).then(() => {
    console.log('DB connected successfully!');
});

// -------------------------

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Testing backend');
})

app.post('/login', (req, res) => {
    const token = jwt.sign(req.body.UserID, 'keytothepage');
    res.json({
        'status': 'Token generated successfully',
        'token': token
    });
    const authHeader = req.headers.authorization.split(" ")[1];
})

data.map((item) => {
    saved = new cities(item).save().then().catch(err => {
        console.log(err);
    })
})

app.listen(3001, () => {console.log('Server is listening')});