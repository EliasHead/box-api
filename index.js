const express = require('express')
const morgan = require('morgan') // log side server
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./config/routes')

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3000, () => {
    console.log('server is working...')
});