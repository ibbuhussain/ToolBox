// ---E R R O R----- IS:
//NIL on 31/10/2023
//------------------------------------------------------------------------------
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
// const pgp = require('pg-promise');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static(path.join(__dirname, "../public")));


// Connect to your PostgreSQL database
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "xyz",
    password: "xyz",
    port: 5432,
});


app.get('/', async (req, res) => {  //async not ALWAYS
    //res.sendFile(__dirname +'/xyz.html'); 
    res.sendFile(path.join(__dirname, '..', 'xyz.html'));
       
    const user = { name: 'xyz', age: 00 };
    res.render('profile.ejs', { user });//For using EJS

}); //app.get close


app.post('/xyz', (req, res) => {
    const { xyz, xyz } = req.body;

    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
        } else {
            console.log('Connected to the database');
        }
    }); 

    db.query(
        'INSERT INTO xyz (xyz, xyz) VALUES ($1, $2) RETURNING id',
        [xyz, xyz],
        (err, result) => {
            if (err) {
                console.error('Error inserting data:', err);
                res.send('Error Executing Query.');
            } else {
                res.sendFile(path.join(__dirname, '..', 'xyz.html'));
            }
        });
}); //app.post close






app.listen(port, () => {  // Putting on server.
    console.log(`Server is running on http://localhost:${port}`);
});//app.listen close
