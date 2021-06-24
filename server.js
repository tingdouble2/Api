let express = require('express')
let bodyParser = require('body-parser')
let morgan = require('morgan')
let cors = require('cors')

let lists = require('./list.json')
let { json } = require('body-parser')
let server = express();
server.use(morgan('dev'))
server.use(cors())
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.listen(3001, function() {
    console.log('Server Listen at http://localhost:3001');
    console.log('Users :', lists)
});


server.get('/getlist', function(req, res) {
    return res.status(200).json({
        message: 'OK',
        data: lists
    })
});

server.post('/postlist', function(req, res) {
    lists.unshift(req.body)
    return res.status(201).json({
        message: 'SUCCESS',
        data: lists
    })
})