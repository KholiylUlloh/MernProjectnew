const express = require('express');
const mongoDB = require('./db')

mongoDB()

const app = express();
//Body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.listen(3002, () => console.log('Server listening on Port: 3002'))

app.get('/api', (req, res) => {
    res.json({
        message: 'success',
        data: 'Hello from Backend'
    })
})