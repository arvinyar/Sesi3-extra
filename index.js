const express = require('express');
const port = 3000
const app = express()

app.get('/',(req,res)=>{
    console.log('API Selamat Pagi')
    res.send('Selamat Pagi');
})

app.listen(port,() => console.log('API listening'))