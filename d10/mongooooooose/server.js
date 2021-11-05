const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/awesomemerndb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{console.log('connected to mongo')})
.catch(err=>{console.log('houston we have a problem', err)})


const app = express()
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
//brings in the routes
require('./server/routes/routes')(app)


app.listen(port)
