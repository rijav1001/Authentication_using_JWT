const express = require('express');
const jwt = require('jsonwebtoken');

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

app.listen(3001, () => {console.log('Server is listening')});