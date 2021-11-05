const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please include a name'],
        minlength:2
    },
    age:Number,
    email:String,
})

const User = mongoose.model('User',UserSchema)

module.exports = User
