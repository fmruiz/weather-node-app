require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

/**
 * Use static files
 */
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

const PORT = process.env.PORT || 3001;

app.listen(PORT, (req, res) => {
    console.log(`Server UP on ${PORT}`);
});
