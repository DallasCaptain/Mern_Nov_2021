const { Person } = require('../models/person')

module.exports.home = (req,res)=>{
        res.json({message:'Hello World'})
    }

module.exports.create=(req,res)=>{
    console.log(req.body)
    Person.create(req.body)
    .then(newperson =>{res.json(newperson)})
    .catch(err=>{res.json(err)})
}

module.exports.update=(req,res)=>{
    Person.findOne({_id:req.params.id})
    .then(person =>{
        person.fname = req.body.fname
        person.lname = req.body.lname
        person.save()
        .then(updated=>{
            res.json(updated)
        })
        .catch(err=>{res.json(err)})
    })
    .catch(err=>{res.json(err)})
}

