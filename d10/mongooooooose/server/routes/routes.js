const Users = require('../controllers/Users')

module.exports = (app)=>{
    app.get('/',(req,res)=>{
       Users.home(req,res)
    })

    app.get('/setup',(req,res)=>{
        Users.setup(req,res)
    })
    
    app.post('/api/v1/Users',(req,res)=>{
        Users.create(req,res)
    })
}