//TO BE NOTED
// js files should be in public folder for HTML files to be routed in server.

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import express from "express";
import bodyParser from "body-parser";
import ejs from 'ejs'

const app = express();
const port = 3000;
// Set up a template engine (e.g., EJS) if you want to use res.render
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/public', express.static(path.join(__dirname, './public')));
 app.use(express.static(path.join(__dirname, '/public')));


//__________________________BELOW ARE GET HANDLES__________________________________________________________
app.get("/", (req, res) => {
    // Use res.sendFile to send an HTML file
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
   //For using EJS
    res.render('login.ejs', { user }); //login is relative to views folder by default
});


//__________________________BELOW ARE POST HANDLES__________________________________________________________

// Define a route to handle login
app.post('/login', (req, res) => {
  const { U_name, password } = req.body;
 //Login check via Dummy user data stored in an array
const users = [  { username: "xyz", password: "123" }  ];
    // Check if the entered credentials match a user in the array
    const user = users.find(u => u.username === U_name && u.password === password);
    if (user) {  // Login successful, store user in local storage
        res.redirect("HOme");
    } 
    else {   // Login failed
      res.render('PP', { error: 'Invalid Username or Password' }); // Use EJS file to display the error
      }     
}); //app.post close bracket

//\\\\\\\\\\\\\\\\\\\\\\\\ L I S T E N   R O U T E \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
