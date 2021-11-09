const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/productmanagerdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{console.log('DB Conncected')})
.catch((err)=>{console.log('DB connect error: ',err)})