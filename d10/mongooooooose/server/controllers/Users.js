const User = require('../models/User')


module.exports = {
    home:(req,res)=>{
        res.json('Welcome')
    },
    
    setup:(req,res)=>{
        User.deleteMany({})
        .then(()=>{
            let user = new User()
            user.name = 'BOB'
            user.age=23
            user.email='bob@bob.com'
            user.save()
            .then(result=>{console.log(result);res.json('did it work?')})
            .catch(err=>{console.log('err:',err);res.json('did it work?')})
        })
        .catch(err=>{console.log('delete error:', err)})
        
    },

    create:(req,res)=>{
        let user = new User()
            user.name = req.body.name
            user.age=req.body.age
            user.email=req.body.email
            user.save()
            .then(result=>{console.log(result);res.json(result)})
            .catch(err=>{console.log('err:',err);res.json(err)})
    }
}