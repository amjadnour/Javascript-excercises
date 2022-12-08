//get handle to the node express library
const express = require("express");

//createan object of the express library as app
//this app object now will have access to alll the predefined methods from the xpress library
const res = require("express/lib/response");

const app = express();

app.get('/hello' , (req,res) => {
    res.send('world');
})

app.get('/kitten' , (req,res) => {
    res.json({
        kittens: 3
    })
})

app.get('/error' , (req,res) => {
    res.status(400).json({
        errorMessage: "missing input"
    })
})

app.get('/hello-path/:firstName/:lastName/shout/:shout' , (req,res) => {
    if(req.params.shout == "true"){
        res.send(("Hello "+req.params.firstName+" "+req))
    }
})

const PORT = 8080
app.listen(PORT, () =>{
    console.log("My API service started on localhost on port ",PORT)
});