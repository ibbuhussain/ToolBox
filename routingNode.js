//TO BE NOTED
//In order to route to html from the respective js files,
// js files should be in public folder

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/public', express.static(path.join(__dirname, './public')));
 app.use(express.static(path.join(__dirname, '/public')));

// Set up a template engine (e.g., EJS) if you want to use res.render
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    // Use res.sendFile to send an HTML file
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get("/signUp", (req, res) => {
    // Use res.sendFile to send an HTML file
    res.sendFile(path.join(__dirname, 'views', 'signUp.html'));
}); 

app.get("/dashbrd", (req, res) => {
    // Use res.sendFile to send an HTML file
    res.sendFile(path.join(__dirname, 'views', 'dashbrd.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
