let express = require('express')
const { path } = require('express/lib/application')
let app = express()
require('./DB/db.gest.js')

// Models
const Message = require('./models/message')

// Middlewear
app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.writeHead(200, "Response succed")
    res.end()
})

app.post('/', (req, res)=> {
    /*if(req.body.message === undefined || req.body.message === "") {
        console.log("Post error at /#CONTACT: message vide");
    }else{
        Message.create(req.body.message, ()=>{
            console.log("Post succes at /#CONTACT");
        })
    }
    res.redirect('/')*/
    console.log(req);
    res.redirect('/')
})

const APP_PORT = 5000;
app.listen(APP_PORT, ()=> {
    console.log(`Server stared at port ${APP_PORT}`);
})