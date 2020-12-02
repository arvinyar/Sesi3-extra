const express = require('express');
const port = 3000
const app = express()

app.get('/',(req,res)=>{
    console.log('Selamat Sore')
    res.send('Selamat Sore');
})

app.listen(port,() => console.log('API listening'))