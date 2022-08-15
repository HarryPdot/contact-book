const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.use(
    express.urlencoded({
    extended: true,
    })
);

app.use(express.json());

app.post('/user/login', (req, res) => {
    console.log(req.body)
    res.redirect('http://localhost:3000/')
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})