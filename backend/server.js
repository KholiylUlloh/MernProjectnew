const express = require('express');
const mongoDB = require('./db');
const user = require('./models/user');

//Database connection
mongoDB()

const app = express();
//Body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//Port
app.listen(3002, () => console.log('Server listening on Port: 3002'))


app.use('/api', require('./routes/signUp'))
// app.get('/api', (req, res) => {
//     res.json({
//         message: 'success',
//         data: 'Hello from Backend'
//     })
// })