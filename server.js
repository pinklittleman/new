const express = require('express')

const app = express()

app.get('/video', (req, res) => {
    console.log('hello world23')
})

app.listen('3000')