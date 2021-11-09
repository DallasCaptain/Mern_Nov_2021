const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    fname: {type:String, minlength:[2,'custom here']},
    lname: {type: String}
})

module.exports.Person = mongoose.model("Person",PersonSchema)

