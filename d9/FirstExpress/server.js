const express = require('express')



const app = express()
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}))


const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

app.get('/',(req,res)=>{
    // console.log(req)
    res.json({ message : "Hello Class of Awesome People"})
})
//index
app.get('/api/v1/users',(req,res)=>{
    res.json(users)
})
//create
app.post('/api/v1/users',(req,res)=>{
    //console.log(req)
    console.log(req.body)
    users.push(req.body)

    res.json('Thankyou for the data')
})

app.listen(port)

