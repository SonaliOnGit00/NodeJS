require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/ ', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('sonalidotcom')
})

app.get('/login', (req, res) =>{
    res.send('<h1>please login to your account</h1>')
})

app.get('/abc', (req, res)=>{
    res.send('<h2>sonaliiiiiii</h2>')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})