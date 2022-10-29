require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

/**
 * Use static files
 */
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));
/**
 * Use hbs for dinamic views
 */
const viewsPath = path.join(__dirname, '../templates');
app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.get('', (req, res) => {
    res.render('index');
});

app.get('/help', (req, res) => {
    res.render('help');
});

app.get('/about', (req, res) => {
    res.render('about');
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, (req, res) => {
    console.log(`Server UP on ${PORT}`);
});
