const express = require('express');
const port = 3000
const app = express()

app.get('/',(req,res)=>{
    console.log('Hello world')
    res.send('Hello World');
})

app.listen(port,() => console.log('API listening'))