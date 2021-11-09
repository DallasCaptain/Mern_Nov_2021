const Persons= require('../controllers/persons')

module.exports = (app)=>{
    app.get('/api', Persons.home)
    app.post('/api/persons',Persons.create)
    app.put('/api/persons/:id',Persons.update)
}

