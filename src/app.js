require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
/**
 * Initialize express
 */
const app = express();
/**
 * Define paths
 */
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
/**
 * Use static files
 */
app.use(express.static(publicDirectoryPath));
/**
 * Use hbs for dinamic views
 */
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
    res.render('index', {
        title: 'Home',
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: `Ups! We can't help you with this...`,
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Ups! Wrong page...',
    });
});
/**
 * Initialize our server
 */
const PORT = process.env.PORT || 8081;

app.listen(PORT, (req, res) => {
    console.log(`Server UP on ${PORT}`);
});
