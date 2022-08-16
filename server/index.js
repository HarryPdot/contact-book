const express = require('express')
const app = express()
const bcrypt = require('bcryptjs')
const { Pool } = require('pg')

const pool = new Pool({
    database: 'phonebookusers',
    user: 'postgres'
})

const PORT = process.env.PORT || 8080

app.use(
    express.urlencoded({
    extended: true,
    })
);

app.use(express.json());

const testPassword = 'mario12'
var testHash;

app.post('/user/login', (req, res) => {
    const user = {email: req.body.email, password: req.body.password}
    let password;
    let sql = `select * from users where email = '${user.email}';`
    pool.query(sql, params = [], (err, dbres) => {
        if(dbres.rows.length > 0) {
            password = dbres.rows[0]['password_digest']
            bcrypt.compare(user.password, password,
                async function(err, isMatch) {
                    isMatch? console.log('its a match') : console.log(`not a match`)
            })
            return res.redirect('http://localhost:3000/')
        } else {
            console.log('email or password is wrong')
            return
        }
    })

})

app.post('/user/signup', (req, res) => {
    const user = {name: req.body.name, email: req.body.email, password: req.body.password}
    let sql = `select * from users where email = '${user.email}';`
    pool.query(sql, params = [], (err, dbres) => {
        if(dbres.rows.length > 0) {
            console.log('email is already taken')
        } else if(user.password.length < 8){
            console.log('password is too insecure')
        } else {
            bcrypt.genSalt(10, (err, Salt) => {
                bcrypt.hash(req.body.password, Salt, (err, hash) => {
                    if (err) {
                        return console.log('Cannot encrypt')
                    }
                    let sql = `insert into users (name, email, password_digest) values ($1, $2, $3)`
                    pool.query(sql, params = [user.name, user.email, hash], (err, dbres) => {
                        console.log(`${user.name} has signed up!`)
                    })
                })
            })
        }
    res.redirect('http://localhost:3000/')
    })


})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})